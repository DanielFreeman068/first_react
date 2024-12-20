import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
import Test from './pages/test';
// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/test', element: <Test /> },
  // Add more routes as needed
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals