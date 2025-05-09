import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

const TeacherStudentView = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isStudent()) {
    location.replace("/student/dashboard");
  }
  
  return (
    <div>
      <TeacherHeader />
      <h1>Teacher Student View</h1>
      <p>This is the teacher's view of student information.</p>
    </div>
  );
}

export default TeacherStudentView;