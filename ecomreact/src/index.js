import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import MasterContainer from './components/masterComponent';

import './index.css';

import reportWebVitals from './reportWebVitals';


import './bootstrap/dist/css/bootstrap.min.css';





import CategoryREST from './components/cayegoryCom/categoryREST';
import SubCategoryREST from './components/cayegoryCom/subcategoryREST';
import PrdImageUpluad from './components/productCom/prdImgUpload';
import ProductDetails from './components/productCom/productCom';
import LoginRegister from './components/LogRegisterCom/loginregCom';
ReactDOM.render(
  <React.StrictMode>
   
 
   <BrowserRouter>
      <MasterContainer/>
    </BrowserRouter>
    {/* <LoginRegister/> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
