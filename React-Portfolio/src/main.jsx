import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Import the pages
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

// Define Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/aboutme',
                element: <AboutMe />
            }
        ]
    }]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
