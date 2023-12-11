import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MentorPage from './MentorPage'
import About from './components/About'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Eligibility from './components/Eligibility'
import EventSchedule from './components/EventSchedule'
import Benefits from './components/Benefits'
import FAQ from './components/Faq';
import ContactUs from './components/ContactUsTemp'





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
  {
    path: "/aboutus",
    element: <About />,

  },
  {
    path:"/timeline",
    element: <Timeline/>
  },
  {
    path:"/prizes",
    element: <Prizes/>
  },
  {
    path:"/eligibility",
    element: <Eligibility/>
  },
  {
    path:"/eventschedule",
    element: <EventSchedule/>
  },
  {
    path: "/benefits",
    element: <Benefits/>
  },
  {
    path: "/faq",
    element: <FAQ/>
  }, 
  {
    path: "/contactus",
    element: <ContactUs/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
