import { Heading } from '@chakra-ui/react'

import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import TeacherProfileCard from '../../components/teacher/profile/TeacherProfileCard';

import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';


const TeacherProfile = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }

  const teacher = {
    profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    bio: 'A passionate educator and aspiring software developer.',
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
      <TeacherProfileCard teacher={teacher} />
    </div>
  );
}

export default TeacherProfile;