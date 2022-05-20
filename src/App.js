import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import getConfig from './config'
import { AppRouter } from './routers/AppRouter'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

/*
import { BrowserRouter as Router, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Route path="/about" component={About} />
    </Router>
  );
}
*/
export default function App() {

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <AppRouter/>

  )
}

