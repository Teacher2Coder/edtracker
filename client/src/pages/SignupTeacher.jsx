import { Card, Field, Input, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PasswordInput } from "../components/ui/password-input"

const SignupTeacher = () => {
  return (
    <div className='login'>
      <Heading size={'6xl'}>Welcome to EduTracker</Heading>
      <div className='login-card'>
        <Card.Root>
          <Card.Header>
            <Card.Title style={{textAlign: 'center'}}>Teacher Sign Up</Card.Title>
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
            <Button colorPalette={'blue'} style={{margin: '0 auto'}}>Login</Button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link to='/student/login'>Already have an account? Click here!</Link>
              <Link to='/student/signup'>Not a teacher? Click here</Link>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

export default SignupTeacher;