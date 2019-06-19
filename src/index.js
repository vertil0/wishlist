import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'
import style from './mystyles.scss';
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('container')
)
serviceWorker.unregister();