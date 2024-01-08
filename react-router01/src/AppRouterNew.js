import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Private from './pages/Private'

const userRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path:'about', element: <About />},
            {path:'contact', element: <Contact />},
            {path:'private', element: <Private />},
            {path:'product/:id', element: <Product />},
            {path:'*', elemet: <NotFound />},
        ]
    }    
])

const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path:'about', element: <About />},
            {path:'contact', element: <Contact />},
            {path:'product/:id', element: <Product />},
            {path:'*', elemet: <NotFound />},
        ]
    }    
])

function AppRouterNew() {
    const isLogin = false
    return (
        <RouterProvider router={isLogin ? userRouter : guestRouter} />    
    )
}

export default AppRouterNew