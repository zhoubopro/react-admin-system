import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routers from './config/router.config';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
ReactDOM.render(<Routers/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
