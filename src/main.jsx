import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
const router =  createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/Blog",
        element: <Blog/>
    },
    {
        path: "/About",
        element: <About/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router}/>
)
