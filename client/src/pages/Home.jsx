// Import components
import Portal from '../components/Portal';
import { Heading } from '@chakra-ui/react'

// Define Home function
const Home = () => {
  return (
    <div className="home">
      <Heading size='6xl'>Welcome to EduTracker</Heading>
      <Portal />
    </div>
  );
}

// Export Home function
export default Home;