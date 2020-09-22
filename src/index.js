import React from 'react'
import ReactDOM from 'react-dom'
import Shopping from './containers/Shopping/Shopping'
import { Provider } from 'react-redux'
import store from './redux/index'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Shopping />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
