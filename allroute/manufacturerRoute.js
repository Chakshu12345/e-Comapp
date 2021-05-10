const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('manufacturer');


instance.get('/api/manufacturer', DalObj.getAllData);
instance.get('/api/manufacturer/:id', DalObj.getAllDataById);
instance.post('/api/manufacturer/', DalObj.createRecord);
instance.put('/api/manufacturer/:id', DalObj.UpdateRecord);
instance.delete('/api/manufacturer/:id', DalObj.DeleteById);


instance.listen(9005,()=>{
    console.log('server started on port 9005');
});