import ProductsHttpService from './../../services/catservice';
// import an operator model from redux-saga/effects for managing async calls

import { takeLatest, all, call,put } from "redux-saga/effects";

// write a function that will access the service and perform async oepration

function fetchDepartments(){
    let serv = new ProductsHttpService('http://127.0.0.1:9002/api/category/');
    const response = serv.getData().then((result)=>result.data.rows);
   
    // resolve the response through the  promises
    return Promise.resolve(response);
}




function* dispatchGetDepartmentsSuccess(){
    
   const resolvedResponse = yield call(fetchDepartments);
    console.log(`The Promise is Resolved in Success ${JSON.stringify(resolvedResponse)}`);
   // dispatch the output action along with the data

   yield put({
       type: 'GET_DEPARTMENTS_SUCCESS',
       departments: resolvedResponse ||  {error: 'GET_DEPARTMENTS_FAILED'} // payload
   });

} 


function* listenGetDepartments(){
  // link the input dispatched action to the output action
  yield takeLatest('GET_DEPARTMENTS', dispatchGetDepartmentsSuccess);
}

function postDepartment(dept){
   let serv = new ProductsHttpService('http://127.0.0.1:9002/api/category/');
  const response = serv.postData(dept).then((result)=>result.data.record);
  return Promise.resolve(response);
}

function* dispatchAddDepartmentSuccess(action){
    // read the payload data
    const inputData = action.payload;
    // call the method that will invoke the HTTP service and pass inut data to it
    const resolvedReponse = yield call(postDepartment, inputData);
    // yield the output action
    yield put({
        type:'ADD_DEPARTMENT_SUCCESS',
        department: resolvedReponse
    })
}


function* listenAddDepartment(){
   
    yield takeLatest('ADD_DEPARTMENT', dispatchAddDepartmentSuccess);
}



function postCategory(cat){
   
    let serv = new ProductsHttpService('http://127.0.0.1:9002/api/category/');
    console.log('saga3333',cat)
   const response = serv.postData(cat).then((result)=>result.data.record);
   return Promise.resolve(response);
 }
 
 function* dispatchAddCategorySuccess(action){
     // read the payload data
     const inputData = action.payload;
     console.log(inputData)
     // call the method that will invoke the HTTP service and pass inut data to it
     const resolvedReponse = yield call(postCategory, inputData);
     // yield the output action
     yield put({
         type:'ADD_CATEGORY_SUCCESS',
         category: resolvedReponse
     })
 }
 
 
 function* listenAddCategory(){
    
     yield takeLatest('ADD_CATEGORY', dispatchAddCategorySuccess);
 }





// 1. create a root saga
export default function* rootSaga(){
    // array of all dispatchers initialted from UI
    yield all([listenGetDepartments(), listenAddDepartment(),listenAddCategory()]);
}