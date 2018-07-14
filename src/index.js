import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'
import App from "./App";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
