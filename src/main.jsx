import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthProvider from './components/providers/AuthProvider'
import PrivateRoute from './components/routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: 'recipe/:id',
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: () => fetch(' https://chef-recipe-hunting-server-monirulislam9549.vercel.app/recipe')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)


