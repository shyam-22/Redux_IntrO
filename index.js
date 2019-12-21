import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import {reducers} from "./reducers/index";
import {createStore} from "redux";




import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
<Provider store= {createStore(reducers)}>
<App />
</Provider>
, document.getElementById('root'));

