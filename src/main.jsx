import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Error from './Pages/Error'
import Search from './Pages/Search'
import Anime from './Pages/Anime'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {
          path: "/",
          element: <Home/>
        },      
        {
          path: "/favorites",
          element: <Favorites/>

        },
        {
          path: "/search",
          element: <Search/>
        },
        {
          path: "/anime/:id",
          element: <Anime/>
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
