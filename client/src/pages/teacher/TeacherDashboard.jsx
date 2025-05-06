// Import components
import { Card, Heading, Button, Stack } from '@chakra-ui/react';
import TeacherHeader from '../../components/teacher/header/TeacherHeader';
import ClassCardTeacher from '../../components/teacher/dashboard/TeacherClassCard';
import Auth from '../../utils/auth';
import NotLoggedIn from '../../components/NotLoggedIn';

// Mock data for classes and students
const classes = [
  {
    className: '1st Period Algebra',
    students: [
      { id: 1, name: 'John Doe', assignments: 5, ungraded:1, pastDue: 2 },
      { id: 2, name: 'Jane Smith', assignments: 3, ungraded:2, pastDue: 1 },
    ]
  },
  {
    className: '2nd Period Algebra',
    students: [
      { id: 1, name: 'Jack Bro', assignments: 4, ungraded:3, pastDue: 3 },
      { id: 2, name: 'Mary Dary', assignments: 5, ungraded:1, pastDue: 1 },
    ]
  },
  {
    className: '3rd Period Algebra',
    students: [
      { id: 1, name: 'Frank Moore', assignments: 6, ungraded:4, pastDue: 5 },
      { id: 2, name: 'Jenny Goff', assignments: 2, ungraded:1, pastDue: 1 },
    ]
  }
]

const DashboardTeacher = () => {
  
  if (!Auth.loggedIn()) {
    return <NotLoggedIn />;
  }
  
  return (
    <div>
      <TeacherHeader />
      <div style={{width: '75%', margin: '0 auto', marginTop: '40px'}}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Welcome, user!</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Your students have __ overdue assignments</p>
            <p>You have __ ungraded assignments</p>
          </Card.Body>
          <Card.Footer>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button colorPalette={'blue'} style={{width: '25%'}}>Create a new class</Button>
              <Button colorPalette={'blue'} style={{width: '25%'}}>Push notifications</Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
      <div style={{width: '75%', margin: '0 auto', marginTop: '20px'}}>
        <Heading>Your classes:</Heading>
        <Stack>
        {/* Quadratic time */}
        {classes.map((cls) => (
          <div key={cls.className}>
            <ClassCardTeacher cls={cls} />
          </div>
        ))}
        </Stack>
      </div>

    </div>
  )
}

export default DashboardTeacher;