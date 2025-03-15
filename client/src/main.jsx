// Import dependencies
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from './components/ui/provider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import LoginStudent from './pages/LoginStudent.jsx';
import LoginTeacher from './pages/LoginTeacher.jsx';
import SignupStudent from './pages/SignupStudent.jsx';
import SignupTeacher from './pages/SignupTeacher.jsx';

// Create the browser router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/student/login',
        element: <LoginStudent />
      },
      {
        path: '/student/signup',
        element: <SignupStudent />
      },
      {
        path: '/teacher/login',
        element: <LoginTeacher />
      },
      {
        path: '/teacher/signup',
        element: <SignupTeacher />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
)