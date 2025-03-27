// Import dependencies
import ReactDOM from 'react-dom/client';
import { Provider } from './components/ui/provider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';

// Import student pages
import LoginStudent from './pages/student/StudentLogin.jsx';
import SignupStudent from './pages/student/StudentSignup.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import StudentProfile from './pages/student/StudentProfile.jsx';
import StudentClassView from './pages/student/StudentClassView.jsx';
import StudentNotifications from './pages/student/StudentNotifications.jsx';

// Import teacher pages
import LoginTeacher from './pages/teacher/TeacherLogin.jsx';
import SignupTeacher from './pages/teacher/TeacherSignup.jsx';
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx';
import TeacherClassView from './pages/teacher/TeacherClassView.jsx';
import TeacherNotifications from './pages/teacher/TeacherNotifications.jsx';
import TeacherStudentView from './pages/teacher/TeacherStudentView.jsx';
import TeacherProfile from './pages/teacher/TeacherProfile.jsx';


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

      // Student routes
      {
        path: '/student/login',
        element: <LoginStudent />
      },
      {
        path: '/student/signup',
        element: <SignupStudent />
      },
      {
        path: '/student/dashboard',
        element: <StudentDashboard />
      },
      {
        path: '/student/notifications',
        element: <StudentNotifications />
      },
      {
        path: '/student/class',
        element: <StudentClassView />
      },
      {
        path: '/student/me',
        element: <StudentProfile />
      },

      // Teacher routes
      {
        path: '/teacher/login',
        element: <LoginTeacher />
      },
      {
        path: '/teacher/signup',
        element: <SignupTeacher />
      },
      {
        path: '/teacher/dashboard',
        element: <TeacherDashboard />
      },
      {
        path: '/teacher/notifications',
        element: <TeacherNotifications />
      },
      {
        path: '/teacher/class',
        element: <TeacherClassView />
      },
      {
        path: '/teacher/studentview',
        element: <TeacherStudentView />
      },
      {
        path: '/teacher/me',
        element: <TeacherProfile />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);