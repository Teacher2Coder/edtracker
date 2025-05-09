// Import components
import Portal from '../components/Portal';
import { Heading, Image } from '@chakra-ui/react'
import Auth from '../utils/auth';

// Define Home function
const Home = () => {
  
  if (Auth.loggedIn()) {
    if (Auth.isTeacher()) {
      window.location.replace('/teacher/dashboard');
    } else if (Auth.isStudent()) {
      window.location.replace('/student/dashboard');
    }
  }

  return (
    <div className="home">
      <Heading size='6xl'>Welcome to EduTracker</Heading>
      <Image
        src='/edutracker-logo.svg'
        alt='EduTracker Logo'
        boxSize='300px'
        objectFit='cover'
        margin={'0 auto'}
      />
      <Portal />
    </div>
  );
}

// Export Home function
export default Home;