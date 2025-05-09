import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

const TeacherClassView = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isStudent()) {
    location.replace("/student/dashboard");
  }

  return (
    <div>
      <TeacherHeader />
      <h1>Teacher Class View</h1>
      {/* Add your class view content here */}
    </div>
  );
}

export default TeacherClassView;