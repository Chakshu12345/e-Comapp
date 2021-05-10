const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('orders');


instance.get('/api/orders', DalObj.getAllData);
instance.get('/api/orders/:id', DalObj.getAllDataById);
instance.post('/api/orders/', DalObj.createRecord);
instance.put('/api/orders/:id', DalObj.UpdateRecord);
instance.delete('/api/orders/:id', DalObj.DeleteById);


instance.listen(9005,()=>{
    console.log('server started on port 9005');
});