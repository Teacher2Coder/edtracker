import StudentHeader from '../../components/student/header/StudentHeader';
import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

const TeacherClassView = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isTeacher()) {
    location.replace('/teacher/dashboard');
  }
  
  return (
    <div>
      <StudentHeader />
      <h1>Student Class View</h1>
      {/* Add your class view content here */}
    </div>
  );
}

export default TeacherClassView;