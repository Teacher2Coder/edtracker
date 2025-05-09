import { Heading } from '@chakra-ui/react'

import StudentHeader from '../../components/student/header/StudentHeader';
import StudentProfileCard from '../../components/student/profile/StudentProfileCard';
import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

import { useQuery } from '@apollo/client';
import { QUERY_STUDENT_ME_PROFILE } from '../../utils/queries';


const StudentProfile = () => {
  
  const { loading, data } = useQuery(QUERY_STUDENT_ME_PROFILE);
  const studentData = data?.getStudentMeProfile || {};

  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isTeacher()) {
    location.replace("/teacher/me");
  }

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  
  return (
    <div>
      <StudentHeader />
      <Heading
        size={'xl'}
        style={{ textAlign: 'center' }}
      >
        Student Profile
      </Heading>
      <StudentProfileCard student={studentData} />
    </div>
  );
}

export default StudentProfile;