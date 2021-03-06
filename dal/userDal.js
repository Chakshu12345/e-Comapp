
const {Sequelize,DataTypes,Model} = require('sequelize');
const path  =require('path');
const jwt = require('jsonwebtoken');

const sequelize = new Sequelize('eshopping', 'root', 'root@1234',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000  
    },
    define:{
        timestamps:false
    }
});

const jwtSecreteSettings={jwtSecret:'mi16james007700semaj61m'}
console.log(jwtSecreteSettings)

const usersinrole = require(path.join(__dirname, './../models/usersinrole'))(sequelize,Sequelize.DataTypes)
const userModel = require(path.join(__dirname, './../models/usermaster'))(sequelize,Sequelize.DataTypes)


class AuthLogic{

    async registerUser(req,resp){
        console.log(req)
        const user =req.body;
        
        await sequelize.sync({force:false})

        const find = await userModel.findOne({where:{UserName:user.UserName}});
        if(find !== null) 
        return resp.status(409).send({message: `User ${user.UserName} is already present`});
        
        
        try {
            let tx = await sequelize.transaction(async (t)=>{                
            const created = await userModel.create(user,{transaction:t}); 
            let inroledata={RowId:0,UserName:user.UserName,RoleName:'customer'};
            const inrole = await usersinrole.create(inroledata,{transaction:t}); 
            
       
            return resp.status(200).send({
              message:"Record Added"
          });
        });
      }catch(ex){
        return resp.status(500).send({message:`${ex.message}`});
      }
        
        
        return resp.status(201).send({message: `User ${user.UserName} is created sucessfully`, response:created});
    }

    async authUser(req,resp){
        const user =req.body;

        console.log(user)
        const find = await userModel.findOne({where:{UserName:user.UserName}});
        if(find==null)
        return resp.status(404).send({message: `User ${user.UserName} is Not found so please register`});

        if(find.Pass.trim() !== user.Pass.trim())   
        return resp.status(401).send({message:`The Password for User ${user.UserName} is not found`})

        const token= jwt.sign({user},jwtSecreteSettings.jwtSecret,{
            expiresIn: 3600
        }); 
        return resp.status(200).send({
            role: user.UserName,
            token:token
        });

    }

    async getdata(req,resp){
        if(req.headers.authorization === undefined){
            return resp.status(401).send({response: `Authorization failed, the auth header is missing in request`});
         } else {

            let receivedtoken = req.headers.authorization.split(" ")[1];

            await jwt.verify(receivedtoken, jwtSecreteSettings.jwtSecret, async(err,decode)=>{
                if(err)
                    return resp.status(401).send({response: `Authorization failed, ${err}`});
                    req.decode = decode; 
                    //  read data and return
                    await sequelize.sync({force:false});
                    const data = await prdModel.findAll();
                    return resp.status(200).send({response:data});   
                });
            
         }
    
    }



}

module.exports=AuthLogic