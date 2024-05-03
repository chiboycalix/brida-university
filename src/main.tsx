import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './layout/header';
import Landing from './pages/landing';
import Footer from './layout/footer';
import AboutUs from './pages/about-us';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
      <Footer />
  </React.StrictMode>,
)
