import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User from './components/User.jsx'
import Layout from './Layout.jsx'
import UserInfo from './components/UserInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    {
      path: "",
      element: <App />
    },
      {
        path: '/users/:userNum',
        element: <User />
      },
      {
        path: '/user/:userId',
        element: <UserInfo />
      }
    ]
  }
]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
