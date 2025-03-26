// Import components
import { Card, Heading, Stack } from '@chakra-ui/react';
import StudentHeader from '../../components/student/StudentHeader';
import StudentClassCard from '../../components/student/StudentClassCard';

const classes = [
  {
    className: 'Algebra',
    teacherName: 'Mr. Black',
    assignments: [
      { id: 1, name: 'Assignment 1', dateAssigned: '2023-10-01', dateDue: '2023-10-15', status: 'Ungraded' },
      { id: 2, name: 'Assignment 2', dateAssigned: '2023-10-05', dateDue: '2023-10-20', status: 'Past Due' }
    ]
  },
  {
    className: 'Geography',
    teacherName: 'Mr. Brown',
    assignments: [
      { id: 1, name: 'Assignment 1', dateAssigned: '2023-10-01', dateDue: '2023-10-15', status: 'Ungraded' },
      { id: 2, name: 'Assignment 2', dateAssigned: '2023-10-05', dateDue: '2023-10-20', status: 'Past Due' }
    ]
  },
  {
    className: 'Physics',
    teacherName: 'Mr. Blue',
    assignments: [
      { id: 1, name: 'Assignment 1', dateAssigned: '2023-10-01', dateDue: '2023-10-15', status: 'Ungraded' },
      { id: 2, name: 'Assignment 2', dateAssigned: '2023-10-05', dateDue: '2023-10-20', status: 'Past Due' }
    ]
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
        <Stack>
        { classes.map((cls) => (
          <div key={cls.className}>
            <StudentClassCard cls={cls} />
          </div>
        ))}
        </Stack>
      </div>

    </div>
  )
}

export default DashboardStudent;