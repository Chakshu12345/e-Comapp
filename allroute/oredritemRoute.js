const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('orderitem');


instance.get('/api/orderitem', DalObj.getAllData);
instance.get('/api/orderitem/:id', DalObj.getAllDataById);
instance.post('/api/orderitem/', DalObj.createRecord);
instance.put('/api/orderitem/:id', DalObj.UpdateRecord);
instance.delete('/api/orderitem/:id', DalObj.DeleteById);


instance.listen(9005,()=>{
    console.log('server started on port 9005');
});