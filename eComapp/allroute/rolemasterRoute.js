const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('rolemaster');


instance.get('/api/rolemaster', DalObj.getAllData);
instance.get('/api/rolemaster/:id', DalObj.getAllDataById);
instance.post('/api/rolemaster/', DalObj.createRecord);
instance.put('/api/rolemaster/:id', DalObj.UpdateRecord);
instance.delete('/api/rolemaster/:id', DalObj.DeleteById);


instance.listen(9005,()=>{
    console.log('server started on port 9005');
});