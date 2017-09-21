import React from 'react'
import ReactDOM from 'react-dom'
import Home from './js/Home.js'
import App from './js/App.jsx'
import "./styles/app.css"
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
	<App />
  </BrowserRouter>,
document.getElementById('root'))