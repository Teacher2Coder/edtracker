import { Heading } from '@chakra-ui/react'

import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import TeacherProfileCard from '../../components/teacher/profile/TeacherProfileCard';

import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

import { useQuery } from '@apollo/client';
import { QUERY_TEACHER_ME_PROFILE } from '../../utils/queries';


const TeacherProfile = () => {
  
  const { loading, data } = useQuery(QUERY_TEACHER_ME_PROFILE);
  const teacherData = data?.getTeacherMeProfile || {};


  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  if (Auth.isStudent()) {
    location.replace("/student/me");
  }

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  
  return (
    <div>
      <TeacherHeader />
      <Heading
        size={'xl'}
        style={{ textAlign: 'center' }}
      >
        Teacher Profile
      </Heading>
      <TeacherProfileCard teacher={teacherData} />
    </div>
  );
}

export default TeacherProfile;