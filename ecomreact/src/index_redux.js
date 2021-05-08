import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "redux"
import {Provider} from "react-redux"

import  './index.css'

import './bootstrap/dist/css/bootstrap.min.css';

import { rootReducer } from "./reduxapp/reducers/index";


import reportWebVitals from './reportWebVitals';
import MainReduxContainerComponent from './reduxapp/MainReduxContainerComponent';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

ReactDOM.render(
<React.StrictMode>
<Provider store={store}>
<MainReduxContainerComponent></MainReduxContainerComponent>
</Provider>

</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

