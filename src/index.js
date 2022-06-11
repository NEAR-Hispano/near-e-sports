import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initContract } from './utils';
import "./assets/css/nucleo-svg.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-design-system.scss";



window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
