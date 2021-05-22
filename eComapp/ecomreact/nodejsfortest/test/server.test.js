const expect = require('chai').expect;
const request = require('request');

const data =[
    {Category:100,CategoryName:'A'}
];

///get category
// describe('Node.js REST API Test Suit',()=>{
//     // succes test
//     it('should return status code as 200',(done)=>{
//         request('http://127.0.0.1:9002/api/category',(error,response,body)=>{
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
// })


////test for post category

it('should return modified array after adding new record in array in post request',(done)=>{
    let record1 = {CategoryId:144,CategoryName:'A'}

    request.post('http://127.0.0.1:9002/api/category', {
        headers: {
           "Content-Type":"application/json"
        }, 
        body:JSON.stringify(record1)
    },(error,response,body)=>{
        let resp=JSON.parse(body)       
        expect(response.statusCode).to.equal(200);
       //expect(response.body.record).to.equal(JSON.stringify(record1));
       done();
    });
});


//test for put category
it('update category with 200 status code and  response body to be equal to record',(done)=>{
    let record = {CategoryId:114,CategoryName:'Aa'}

    request.put('http://127.0.0.1:9002/api/category/1', {
        headers: {
           "Content-Type":"application/json"
        }, 
        body:JSON.stringify(record)
    },(error,response,body)=>{
        let resp=JSON.parse(body)       
        expect(response.statusCode).to.equal(200);
       //expect(body).to.equal(JSON.stringify(record));
       done();
    });
});




