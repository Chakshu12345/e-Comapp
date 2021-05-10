const express = require('express');
const cors = require('cors');
const dispatchDal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let dispDal = new dispatchDal('dispatch');


instance.get('/api/dispatch', dispDal.getAllData);
instance.get('/api/dispatch/:id', dispDal.getAllDataById);
instance.post('/api/dispatch/', dispDal.createRecord);
instance.put('/api/dispatch/:id', dispDal.UpdateRecord);
instance.delete('/api/dispatch/:id', dispDal.DeleteById);


instance.listen(9003,()=>{
    console.log('server started on port 9001');
});
