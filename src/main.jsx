import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from "./components/Footer";
import App from './App.jsx'
import './index.css'
import axios from 'axios';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <App />
    
  </StrictMode>,
)
