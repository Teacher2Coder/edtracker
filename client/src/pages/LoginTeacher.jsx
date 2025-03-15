import { Card, Field, Input, Heading, Button } from '@chakra-ui/react'
import { PasswordInput } from "../components/ui/password-input"

const LoginTeacher = () => {
  return (
    <div className='login'>
      <Heading size={'6xl'}>Welcome to EduTracker</Heading>
      <div className='login-card'>
        <Card.Root>
          <Card.Header>
            <Card.Title style={{textAlign: 'center'}}>Teacher Login</Card.Title>
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
          <Card.Footer>
            <Button colorPalette={'blue'} style={{margin: '0 auto'}}>Login</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

export default LoginTeacher;