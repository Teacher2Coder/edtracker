// Import dependencies
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from './components/ui/provider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import LoginStudent from './pages/student/LoginStudent.jsx';
import LoginTeacher from './pages/teacher/LoginTeacher.jsx';
import SignupStudent from './pages/student/SignupStudent.jsx';
import SignupTeacher from './pages/teacher/SignupTeacher.jsx';
import DashboardStudent from './pages/student/DashboardStudent.jsx';
import DashboardTeacher from './pages/teacher/DashboardTeacher.jsx';

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
      {
        path: '/student/dashboard',
        element: <DashboardStudent />
      },
      {
        path: '/teacher/dashboard',
        element: <DashboardTeacher />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);