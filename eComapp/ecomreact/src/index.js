import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from "redux"
import {BrowserRouter} from 'react-router-dom';
import MasterContainer from './components/masterComponent';
import createSagaMinndeware from 'redux-saga';

import { Provider } from "react-redux";

import reducer from "./components/prdSaga/reducers/index"

import rootSaga from "./components/prdSaga/sagas/index"


import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


import reportWebVitals from './reportWebVitals';


import CreateCategoty from './../src/components/prdSaga/views/test1'
const sagaMiddleware = createSagaMinndeware();

const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  


let store = createStore(reducer, parameterEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
      {/* the Redux COntext with middleware is created with store to manage the react-redux execution for all react components those are using dispatch, store connect using selector, etc*/}
      <Provider store={store}>
      <BrowserRouter>
      <CreateCategoty></CreateCategoty>
         <MasterContainer></MasterContainer>
         </BrowserRouter>
      </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );


  reportWebVitals();