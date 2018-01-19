/*
* React
*/
import React from 'react'
import {render} from 'react-dom'

/*
* App
*/
import {Provider} from 'react-redux'
import store from './store/store'
import App from './modules/App'
import './index.css'

/*
* Render App
*/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
