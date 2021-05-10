const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('usersinrole');


instance.get('/api/userinrole', DalObj.getAllData);
instance.get('/api/userinrole/:id', DalObj.getAllDataById);
instance.post('/api/userinrole/', DalObj.createRecord);
instance.put('/api/userinrole/:id', DalObj.UpdateRecord);
instance.delete('/api/userinrole/:id', DalObj.DeleteById);


instance.listen(9006,()=>{
    console.log('server started on port 9006');
});