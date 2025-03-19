import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';



import App from './App';
import Landing from "./Pages/Landing"
import Prompt from "./Pages/Prompt"
// import Trip from "./Pages/Trip"

// import Header-page from "./Header-page"
import reportWebVitals from './reportWebVitals';
import Trip from './Pages/Trip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/prompt" element={<Prompt />} />
    <Route path="/trip" element={<Trip />} />



  </Routes>

  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



