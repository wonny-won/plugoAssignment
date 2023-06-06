import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewProduct from 'pages/product/new/newProduct';
import { worker } from 'mocks/browsers';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import ProductList from 'pages/product/list/productList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ProductDetail from 'pages/product/detail/productDetail';

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/product/new" element={<NewProduct/>}/>
        <Route path="/product/list" element={<ProductList/>}/>
        <Route path="/product/detail/:id" element={<ProductDetail/>}/>
      </Routes>
	  </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
