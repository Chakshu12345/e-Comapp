const express = require('express');
const cors = require('cors');
const ProductDal = require('./../dal/Ecomdal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let catDal = new ProductDal('category');

let subcatDal = new ProductDal('subcategories');

instance.get('/api/category', catDal.getAllData);
instance.get('/api/category/:id', catDal.getAllDataById);
instance.post('/api/category/', catDal.createRecord);
instance.put('/api/category/:id', catDal.UpdateRecord);
instance.delete('/api/category/:id', catDal.DeleteById);

instance.get('/api/subcategories', subcatDal.getAllData);
instance.get('/api/subcategories/:id', subcatDal.getAllDataById);
instance.post('/api/subcategories/', subcatDal.createRecord);
instance.put('/api/subcategories/:id', subcatDal.UpdateRecord);
instance.delete('/api/subcategories/:id', subcatDal.DeleteById);

instance.listen(9002,()=>{
    console.log('server started on port 9002');
});