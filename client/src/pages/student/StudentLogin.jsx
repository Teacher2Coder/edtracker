import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PasswordInput } from "../../components/ui/password-input"

import { useAuth } from '../../utils/useAuth';

const LoginStudent = () => {
  
  const handleStudentLogin = (event) => {
    event.preventDefault();

    location.href = '/student/dashboard';
  }
  
  return (
    <div className='login'>
      <Heading size={'6xl'}>Welcome to EduTracker</Heading>
      <Image
        src='/edutracker-logo.svg'
        alt='EduTracker Logo'
        boxSize='300px'
        objectFit='cover'
        margin={'0 auto'}
      />
      <div className='login-card'>
        <Card.Root>
          <Card.Header>
            <Card.Title style={{textAlign: 'center'}}>Student Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Email</Field.Label>
                <Input placeholder='example@email.com' name='email' />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='password' />
              </Field.Root>
            </div>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', flexDirection: 'column' }}>
            <Button 
              colorPalette={'blue'} 
              style={{margin: '0 auto'}}
              onClick={handleStudentLogin}
            >
              Login
            </Button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link to='/student/signup'>Don't have an account? Click here!</Link>
              <Link to='/teacher/login'>Not a student? Click here</Link>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

export default LoginStudent;