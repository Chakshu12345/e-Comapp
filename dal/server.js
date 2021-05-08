
const express = require('express');
const multer = require('multer');


let instance  =express();
const cors = require('cors');
instance.use(cors());

const {Sequelize,DataTypes,Model, ValidationError} = require('sequelize');
const path = require('path');
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

////
//const product = require(path.join(__dirname, '../models/product'))(sequelize,Sequelize.DataTypes);
let prdModel = require(path.join(__dirname, './../models/product'))(sequelize,Sequelize.DataTypes);
//console.log(sequelize)
let prdImage = require(path.join(__dirname, './../models/imgepath'))(sequelize,Sequelize.DataTypes);
        //console.log(prdModel)





let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, './upload');
    },
    filename:(req,file, callback)=>{
        // this callback is used to contain the metadata information of the file
        callback(null, file.originalname);
    }
});


let upload = multer({storage:storage}).single('file');


instance.get('/',(req,resp)=>{
    resp.sendFile(__dirname + '/index.html');
});

instance.post('/uploadfile', (req,resp)=>{
    //console.log(req.file)  
    
    upload(req,resp,async function(err){
        try {
            let tx = await sequelize.transaction(async (t)=>{ 
            const productObject = JSON.parse(req.body['prd'])
            console.log(prdImage)
            let prd = await prdModel.create(productObject,{transaction:t});
            const imgobj = req.file
            imgobj['ProductId'] = productObject['ProductId']
            console.log(imgobj)
            let img = await prdImage.create(imgobj,{transaction:t});
            return resp.status(200).send({
              message:"Record Added"
          });
        });
      }catch(ex){
        return resp.status(500).send({message:`${ex.message}`});
      }
      
    //resp.status(200).end('File is uploaded successfully');


    });
});

instance.listen(8090,()=>{
    console.log('Started server on 8090');
});