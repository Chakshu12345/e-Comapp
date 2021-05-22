const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
let data =[
    {id:1,name:'A'},
    {id:2,name:'B'}
];

instance.get('/api/receive',(req,resp)=>{
    resp.status(200).send('Hello World');
});


instance.listen(7090,()=>{
    console.log('Server started on port 7090');
});

