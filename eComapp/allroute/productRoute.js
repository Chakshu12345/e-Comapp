const express = require('express');
const cors = require('cors');
const ProductDal = require('./../dal/prdDal');



let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let prdDal = new ProductDal('product');


instance.get('/api/products', prdDal.getAllData);
instance.get('/api/products/:id', prdDal.getAllDataById);
instance.post('/api/products/', prdDal.createRecord);
instance.put('/api/products/:id', prdDal.UpdateRecord);
instance.delete('/api/products/:id', prdDal.DeleteById);


instance.listen(9001,()=>{
    console.log('server started on port 9001');
});
