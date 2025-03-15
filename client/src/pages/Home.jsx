import Portal from '../components/Portal';
import { Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <div className="home">
      <Heading size='6xl'>Welcome to EduTracker</Heading>
      <Portal />
    </div>
  );
}

export default Home;