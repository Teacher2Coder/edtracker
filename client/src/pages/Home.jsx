// Import components
import Portal from '../components/Portal';
import { Heading, Image } from '@chakra-ui/react'

// Define Home function
const Home = () => {
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