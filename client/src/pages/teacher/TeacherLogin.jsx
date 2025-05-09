import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { PasswordInput } from "../../components/ui/password-input";
import { LOGIN_TEACHER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginTeacher = () => {
  
  if (Auth.isStudent()) {
    window.location.replace('/student/dashboard');
  }

  if (Auth.isTeacher()) {
    window.location.replace('/teacher/dashboard');
  }
  
  const [formData, setFormData] = useState({
    teacherEmail: '',
    teachPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [loginTeacher, { error, data }] = useMutation(LOGIN_TEACHER);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleTeacherLogin = async (event) => {
    event.preventDefault();

    const { teacherEmail, teacherPassword } = formData;

    if (teacherEmail && teacherPassword) {
      try {
        const { data } = await loginTeacher({
          variables: { teacherEmail, teacherPassword }
        });
        Auth.login(data.loginTeacher.token);
        window.location.assign('/teacher/dashboard');
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
            <Card.Title style={{textAlign: 'center'}}>Teacher Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Email</Field.Label>
                <Input placeholder='example@email.com' name='teacherEmail' onChange={handleInputChange} />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='teacherPassword' onChange={handleInputChange} />
              </Field.Root>
            </div>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', flexDirection: 'column' }}>
            <Button 
              colorPalette={'blue'} 
              style={{margin: '0 auto'}}
              onClick={handleTeacherLogin}
            >
              Login
            </Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link to='/teacher/signup'>Don't have an account? Click here!</Link>
              <Link to='/student/login'>Not a teacher? Click here</Link>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

export default LoginTeacher;