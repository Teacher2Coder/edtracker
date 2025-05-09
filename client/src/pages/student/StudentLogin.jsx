import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { PasswordInput } from "../../components/ui/password-input"
import { LOGIN_STUDENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginStudent = () => {
  
  if (Auth.isStudent()) {
    window.location.replace('/student/dashboard');
  }

  if (Auth.isTeacher()) {
    window.location.replace('/teacher/dashboard');
  }

  const [formData, setFormData] = useState({
    studentEmail: '',
    studentPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [loginStudent, { error, data }] = useMutation(LOGIN_STUDENT);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleStudentLogin = async (event) => {
    event.preventDefault();

    const { studentEmail, studentPassword } = formData;

    if (studentEmail && studentPassword) {
      try {
        const { data } = await loginStudent({
          variables: { studentEmail, studentPassword }
        });
        Auth.login(data.loginStudent.token);
        window.location.assign('/student/dashboard');
      } catch (e) {
        console.error(e);
        setErrorMessage('An error occurred while logging in. Please try again.');
      }
    } else {
      setErrorMessage('Please input an email and password.');
    }
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
                <Input placeholder='example@email.com' name='studentEmail' onChange={handleInputChange}/>
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='studentPassword' onChange={handleInputChange}/>
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
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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