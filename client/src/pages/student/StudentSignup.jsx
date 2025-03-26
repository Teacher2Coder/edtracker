// Import components
import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PasswordInput } from "../../components/ui/password-input"

// Define SignupStudent function
const SignupStudent = () => {
  return (
    <div className='login'>
      <Heading size={'6xl'}>Welcome to EduTracker</Heading>
      <Image
        src='/edutracker-logo.svg'
        alt='EduTracker Logo'
        boxSize='200px'
        objectFit='cover'
        margin={'0 auto'}
      />
      <div className='login-card'>
        <Card.Root>
          <Card.Header>
            <Card.Title style={{textAlign: 'center'}}>Student Sign Up</Card.Title>
          </Card.Header>
          <Card.Body>
          <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Name</Field.Label>
                <Input placeholder='John Doe' name='name' />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Email</Field.Label>
                <Input placeholder='example@email.com' name='email' />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Email</Field.Label>
                <Input placeholder='example@email.com' name='emailConfirm' />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='password' />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='passwordConfirm' />
              </Field.Root>
            </div>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', flexDirection: 'column' }}>
            <Button colorPalette={'blue'} style={{margin: '0 auto'}}>Sign up!</Button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link to='/student/login'>Already have an account? Click here!</Link>
              <Link to='/teacher/signup'>Not a student? Click here</Link>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

// Export SignupStudent function
export default SignupStudent;