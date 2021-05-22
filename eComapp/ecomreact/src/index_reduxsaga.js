import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from "redux"


import createSagaMinndeware from 'redux-saga';

import { Provider } from "react-redux";

import reducer from "./sagaapp/reducers/index";

import rootSaga from './sagaapp/sagas/index';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


import reportWebVitals from './reportWebVitals';

import MainSagaComponent from './sagaapp/mainsagacomponent';

const sagaMiddleware = createSagaMinndeware();

const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  


let store = createStore(reducer, parameterEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
      {/* the Redux COntext with middleware is created with store to manage the react-redux execution for all react components those are using dispatch, store connect using selector, etc*/}
      <Provider store={store}>
         <MainSagaComponent></MainSagaComponent>
      </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );


  reportWebVitals();