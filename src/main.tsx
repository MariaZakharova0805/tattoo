import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from './pages/error';
import { Main } from './pages/main'
import { Artists } from './pages/artists'
import { Gallery } from './pages/gallery'
import { Appointment } from './pages/appointment'
import { Contact } from './pages/contact'
import { Member } from './pages/member';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/artists/:name",
        element: <Member />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
