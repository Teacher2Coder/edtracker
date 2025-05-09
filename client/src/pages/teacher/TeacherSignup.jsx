// Import packages
import { useState } from 'react';
import { useMutation } from '@apollo/client';

// Import components
import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PasswordInput } from "../../components/ui/password-input";

//Import services
import { ADD_TEACHER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupTeacher = () => {
  
  if (Auth.isStudent()) {
    window.location.replace('/student/dashboard');
  }

  if (Auth.isTeacher()) {
    window.location.replace('/teacher/dashboard');
  }
  
  const [formData, setFormData] = useState({
    teacherName: '',
    teacherEmail: '',
    emailConfirm: '',
    teacherPassword: '',
    passwordConfirm: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [addTeacher, { error, data }] = useMutation(ADD_TEACHER);
  
  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleTeacherSignup = async (event) => {
    event.preventDefault();

    const { teacherName, teacherEmail, emailConfirm, teacherPassword, passwordConfirm } = formData;

    //Check for empty fields
    if (teacherName && teacherEmail && emailConfirm && teacherPassword && passwordConfirm) {
      // Check if email matches
      if (teacherEmail === emailConfirm) {
        // Check if password matches
        if (teacherPassword === passwordConfirm) {
          try {
            const { data } = await addTeacher({
              variables: { teacherName, teacherEmail, teacherPassword }
            });
            Auth.login(data.addTeacher.token);
            window.location.assign('/teacher/dashboard');
          } catch (e) {
            console.error(e);
            setErrorMessage('An error occurred while signing up. Please try again.');
          }
        } else {
          setErrorMessage('Passwords do not match');
        }
      } else {
        setErrorMessage('Email does not match');
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  }

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
            <Card.Title style={{textAlign: 'center'}}>Teacher Sign Up</Card.Title>
          </Card.Header>
          <Card.Body>
          <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Name</Field.Label>
                <Input placeholder='John Doe' name='teacherName' onChange={handleInputChange} />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Email</Field.Label>
                <Input placeholder='example@email.com' name='teacherEmail' onChange={handleInputChange} />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Email</Field.Label>
                <Input placeholder='example@email.com' name='emailConfirm' onChange={handleInputChange} />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='teacherPassword' onChange={handleInputChange} />
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='passwordConfirm' onChange={handleInputChange} />
              </Field.Root>
            </div>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', flexDirection: 'column' }}>
            <Button 
              colorPalette={'blue'}
              style={{margin: '0 auto'}}
              onClick={handleTeacherSignup}
            >
              Sign up!
            </Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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