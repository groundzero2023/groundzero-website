import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MentorPage from './MentorPage'
import StatementDetails from './components/problem-statement-components/StatementDetails'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/problems/:id",
    element: <StatementDetails />,
  },
  {
    path: "/mentors",
    element: <MentorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
