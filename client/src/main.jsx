import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import App from './components/App'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer />
      <App />
  </>,
)
