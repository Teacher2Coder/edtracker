import { Heading } from '@chakra-ui/react'

import StudentHeader from '../../components/student/header/StudentHeader';
import StudentProfileCard from '../../components/student/profile/StudentProfileCard';


const StudentProfile = () => {
  
  const student = {
    profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    bio: 'A passionate learner and aspiring software developer.',
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
      <StudentProfileCard student={student} />
    </div>
  );
}

export default StudentProfile;