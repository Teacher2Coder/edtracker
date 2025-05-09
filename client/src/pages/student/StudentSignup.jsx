// Import components
import { Card, Field, Input, Heading, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_STUDENT } from '../../utils/mutations'
import { PasswordInput } from "../../components/ui/password-input"
import Auth from '../../utils/auth'

// Define SignupStudent function
const SignupStudent = () => {
  
  if (Auth.isStudent()) {
    window.location.replace('/student/dashboard');
  }

  if (Auth.isTeacher()) {
    window.location.replace('/teacher/dashboard');
  }

  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    emailConfirm: '',
    studentPassword: '',
    passwordConfirm: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [addStudent, { error, data }] = useMutation(ADD_STUDENT);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }



  const handleStudentSignup = async (event) => {
    event.preventDefault();

    const { studentName, studentEmail, emailConfirm, studentPassword, passwordConfirm } = formData;

    //Check for empty fields
        if (studentName && studentEmail && emailConfirm && studentPassword && passwordConfirm) {
          // Check if email matches
          if (studentEmail === emailConfirm) {
            // Check if password matches
            if (studentPassword === passwordConfirm) {
              try {
                const { data } = await addStudent({
                  variables: { studentName, studentEmail, studentPassword }
                });
                Auth.login(data.addStudent.token);
                window.location.assign('/student/dashboard');
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
            <Card.Title style={{textAlign: 'center'}}>Student Sign Up</Card.Title>
          </Card.Header>
          <Card.Body>
          <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Name</Field.Label>
                <Input placeholder='John Doe' name='studentName' onChange={handleInputChange}/>
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Email</Field.Label>
                <Input placeholder='example@email.com' name='studentEmail' onChange={handleInputChange}/>
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Email</Field.Label>
                <Input placeholder='example@email.com' name='emailConfirm' onChange={handleInputChange}/>
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Your Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='studentPassword' onChange={handleInputChange}/>
              </Field.Root>
            </div>
            <div className='login-form-control'>
              <Field.Root>
                <Field.Label>Confirm Password</Field.Label>
                <PasswordInput placeholder='supersecretpassword' name='passwordConfirm' onChange={handleInputChange}/>
              </Field.Root>
            </div>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', flexDirection: 'column' }}>
            <Button 
              colorPalette={'blue'} 
              style={{margin: '0 auto'}}
              onClick={handleStudentSignup}
            >
              Sign up!
            </Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link to='/student/login'>Already have an account? Click here!</Link>
              <Link to='/student/signup'>Not a student? Click here</Link>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

// Export SignupStudent function
export default SignupStudent;