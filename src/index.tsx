import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { worker } from 'mocks/browsers';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
);
reportWebVitals();
