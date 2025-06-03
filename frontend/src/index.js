import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './pages/Contact'
import About from './pages/About'
import Course from './pages/Course'
import Virtual from './pages/Virtual';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },

  {
    path: '/courses',
    element: <Course/>,
  },
  {
    path: '/virtual coaching',
    element: <Virtual/>,
  },

  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
