const express = require('express');
const cors = require('cors');
const customerDal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let custDal = new customerDal('customer');


instance.get('/api/customer', custDal.getAllData);
instance.get('/api/customer/:id', custDal.getAllDataById);
instance.post('/api/customer/', custDal.createRecord);
instance.put('/api/customer/:id', custDal.UpdateRecord);
instance.delete('/api/customer/:id', custDal.DeleteById);


instance.listen(9004,()=>{
    console.log('server started on port 9004');
});
