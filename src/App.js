import React from 'react'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from 'react-router-dom'
import NavbarComponent  from './cmmons/navbar'
import Home from './components/home'
import LoginForm from './auth/login'
import SignupForm from './auth/signup'

const Layout = () => {
    return (
        <div >
            <NavbarComponent   />
            <ScrollRestoration />
            <Outlet />
             
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
             
            },
           
           
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/signup',
                element: <SignupForm />,
            },
        ],
    },
])

function App() {
    return (
        <div className="font-bodyFont">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
