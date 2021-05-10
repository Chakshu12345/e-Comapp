const {Sequelize,DataTypes,Model, ValidationError} = require('sequelize');
const path  =require('path');
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

//const prdModel = require(path.join(__dirname, './../models/product'))(sequelize,Sequelize.DataTypes);

class econdal {
    prdModel=''
    constructor(modelsVal){
        
        this.prdModel = require(path.join(__dirname, './../models/'+modelsVal))(sequelize,Sequelize.DataTypes);
       

    }
     getAllData = async (request,response)  =>{
   // async getAllData(request,response){
        console.log(this.prdModel)
        try {
            await sequelize.sync({force:false}); // connect to database
            let rows =  await this.prdModel.findAll(); // return the resolverd data
            if(rows){
                return response.status(200)
                .send({
                    statusMessage: 'Data is Read Successfully',
                    rowCount:rows.length,
                    rows:rows
                });
            }
            return  response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
            
        } catch (error) {
            return  response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
        }
       
    
    }

    

     getAllDataById = async(request,response)=>{
        let id = parseInt(request.params.id);
        await sequelize.sync({force:false}); // connect to database
        let row =  await this.prdModel.findOne({where:{RowId:id}}); // return the resolverd data
        if(row){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rows:row
            });
        }
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    }

     createRecord= async(request,response)=>{  
        console.log('requestttttt'+request.body)      
        try {
        const objectToCreate = request.body;
    
        
        await sequelize.sync({force:false});      
        let record= await this.prdModel.create(objectToCreate)
        if(record){
            return response .status(200)
                .send({
                    statusMessage: 'Record Added Successfully',
                    record:record
                });
        }       
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
            
        } catch (error) {
            console.log('errrrrr'+error)
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            }); 
        }
        
      
    }

     UpdateRecord= async(request,response)=>{
        try {
            let id = parseInt(request.params.id);
        const objectToUpdate = request.body;
        
        await sequelize.sync({force:false});

        let record = await this.prdModel.update(objectToUpdate,{where:{RowId:id}})
        //let record =  await productModel.update(productObject,{where:{ProductId:id}})
        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'Record Modified Successfully',
                    
                });
        }
       
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });

            
        } catch (error) {
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
        }
        
    }

     DeleteById =async(request,response)=>{
        let  id= parseInt(request.params.id);
        await sequelize.sync({force:false})
        let record= await this.prdModel.destroy({where:{RowId:id}})  

        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'Record Deleted Successfully',
                    record:record
                });
        }
       
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
    }
    

    


}

module.exports = econdal;

