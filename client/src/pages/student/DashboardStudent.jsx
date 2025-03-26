// Import components
import { Card, Heading } from '@chakra-ui/react';
import StudentHeader from '../../components/StudentHeader';

const classes = [
  {
    className: 'Algebra',
    teacherName: 'Mr. Black',
  },
  {
    className: 'Geography',
    teacherName: 'Mr. Brown'
  },
  {
    className: 'Physics',
    teacherName: 'Mr. Blue'
  }
]

const DashboardStudent = () => {
  return (
    <div>
      <StudentHeader />
      <div style={{width: '75%', margin: '0 auto', marginTop: '20px'}}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Welcome, user!</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>You have __ assignments due</p>
            <p>You have __ overdue assignments</p>
            <p>You have __ ungraded assignments</p>
          </Card.Body>
        </Card.Root>
      </div>
      <div style={{width: '75%', margin: '0 auto', marginTop: '20px'}}>
        <Heading>Your classes:</Heading>
        {classes.map((cls) => (
          <div key={cls.className} style={{marginTop: '10px'}}>
            <Card.Root>
              <Card.Header>
                <Card.Title>{cls.className} with {cls.teacherName}</Card.Title>
              </Card.Header>
              <Card.Body>
                List of assignments here
              </Card.Body>
            </Card.Root>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DashboardStudent;