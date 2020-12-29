// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import App from './features/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
