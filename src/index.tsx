import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from 'pages/product/new/newProduct';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/product/new" element={<NewProduct/>}/>
      </Routes>
	  </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
