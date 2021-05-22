import ProductsHttpService from './../../../services/catservice';

import { takeLatest, all, call,put } from "redux-saga/effects";



function fetchProducts(){
    let serv = new ProductsHttpService('http://127.0.0.1:9001/api/products/');
    const response = serv.getData().then((result)=>result.data.rows);
   
    // resolve the response through the  promises
    return Promise.resolve(response);
}




function* dispatchGetProductsSuccess(){
    
   const resolvedResponse = yield call(fetchProducts);
   // console.log(`The Promise is Resolved in Success ${JSON.stringify(resolvedResponse)}`);
   // dispatch the output action along with the data

   yield put({
       type: 'GET_PRODUCTS_SUCCESS',
       Products: resolvedResponse ||  {error: 'GET_PRODUCTS_FAILED'} // payload
   });

} 


function* listenGetProducts(){
  // link the input dispatched action to the output action
  yield takeLatest('GET_PRODUCTS', dispatchGetProductsSuccess);
}


export default function* rootSaga(){
    // array of all dispatchers initialted from UI
    yield all([listenGetProducts()]);
}