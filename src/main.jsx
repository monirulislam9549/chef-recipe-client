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
        path: 'recipe/:id',
        element: <RecipeDetails></RecipeDetails>,
        loader: () => fetch('http://localhost:5000/recipe')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


