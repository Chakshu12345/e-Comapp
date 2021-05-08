const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let DalObj = new Dal('userlogininfo');


instance.get('/api/userlogininfo', DalObj.getAllData);
instance.get('/api/userlogininfo/:id', DalObj.getAllDataById);
instance.post('/api/userlogininfo/', DalObj.createRecord);
instance.put('/api/userlogininfo/:id', DalObj.UpdateRecord);
instance.delete('/api/userlogininfo/:id', DalObj.DeleteById);


instance.listen(9008,()=>{
    console.log('server started on port 9008');
});