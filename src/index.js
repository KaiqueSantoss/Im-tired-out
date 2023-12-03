import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter as createBrowser, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowser([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },{
        path:'/Buy',
        element:<Buy/>
      },{
        path:'/Contact',
        element:<Contact/>
      }
    ]
  }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
