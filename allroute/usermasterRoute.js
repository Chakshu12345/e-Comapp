const express = require('express');
const cors = require('cors');
const Dal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let userObj = new Dal('usermaster');


instance.get('/api/userlogininfo', userObj.getAllData);
instance.get('/api/userlogininfo/:id', userObj.getAllDataById);
instance.post('/api/userlogininfo/', userObj.createRecord);
instance.put('/api/userlogininfo/:id', userObj.UpdateRecord);
instance.delete('/api/userlogininfo/:id', userObj.DeleteById);


instance.listen(9009,()=>{
    console.log('server started on port 9008');
});