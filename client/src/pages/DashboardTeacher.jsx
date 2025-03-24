// Import components
import { Card, Heading, Button } from '@chakra-ui/react';

const classes = [
  {
    className: '1st Period Algebra',
  },
  {
    className: '2nd Period Algebra',
  },
  {
    className: '3rd Period Algebra',
  }
]

const DashboardStudent = () => {
  return (
    <div>
      <div style={{width: '75%', margin: '0 auto', marginTop: '20px'}}>
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
        {classes.map((cls) => (
          <div key={cls.className} style={{marginTop: '10px'}}>
            <Card.Root>
              <Card.Header>
                <Card.Title>{cls.className}</Card.Title>
              </Card.Header>
              <Card.Body>
                List of students here
              </Card.Body>
            </Card.Root>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DashboardStudent;