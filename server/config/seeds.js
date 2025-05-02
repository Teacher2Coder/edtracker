// Import Models
import { Teacher, Student, Assignment, Class } from '../models/index.js';
import { sequelize } from './connection.js';


// Helper functions
const generateRandomName = () => {
  const firstNames = ["Alice", "Bob", "Charlie", "David", "Emily", "Fiona", "George", "Hannah", "Ivy", "Jack", "Kevin", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina"];
  const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark"];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

const generateRandomEmail = (name) => {
  const domains = ["example.com", "test.com", "demo.com", "sample.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${name.toLowerCase().replace(/\s+/g, '.')}${randomNumber}@${randomDomain}`;
}

const generateRandomPassword = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

const generateRandomClassName = () => {
  const classNames = ["Math", "Science", "History", "English", "Art", "Music", "Physical Education", "Computer Science", "Biology", "Chemistry"];
  return classNames[Math.floor(Math.random() * classNames.length)];
}

const generateRandomAssignmentName = () => {
  const assignmentNames = ["Homework", "Project", "Quiz", "Test", "Assignment", "Lab Report", "Essay", "Presentation", "Case Study", "Research Paper"];
  return assignmentNames[Math.floor(Math.random() * assignmentNames.length)];
}


// Create a array of Teachers
const createTeachers = async () => {
  const teachers = [];
  for (let i = 0; i < 10; i++) {
    const teacherName = generateRandomName();
    const teacherEmail = generateRandomEmail(teacherName);
    const teacherPassword = generateRandomPassword();

    const teacher = {
      teacherName,
      teacherEmail,
      teacherPassword,
    }

    teachers.push(teacher);
  }
  return teachers;
}

// Create an array of Students
const createStudents = async () => {
  const students = [];
  for (let i = 0; i < 10; i++) {
    const studentName = generateRandomName();
    const studentEmail = generateRandomEmail(studentName);
    const studentPassword = generateRandomPassword();

    const student = {
      studentName,
      studentEmail,
      studentPassword,
    }

    students.push(student);
  }
  return students;
}

// Create an array of Classes
const createClasses = async (teachers) => {
  const classes = [];
  for (let i = 0; i < teachers.length; i++) {
    const randomClassName = generateRandomClassName();
    const teacherName = teachers[i].teacherName;

    const generatedClassName = `${teacherName}'s ${randomClassName} class`;
    const generatedClass = {
      className: generatedClassName,
    }
    classes.push(generatedClass);
  }
  return classes;
}

// Create an array of Assignments
const createAssignments = async () => {
  const assignments = [];
  for (let i = 0; i < 20; i++) {
    const randomAssignmentName = generateRandomAssignmentName();

    const generatedAssignment = {
      assignmentName: randomAssignmentName,
      assignmentDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      assignDate: new Date(),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
    }
    assignments.push(generatedAssignment);
  }
  return assignments;
}

// Seed the database with the generated data arrays
const seedData = async () => {
  const teachers = await createTeachers();
  const students = await createStudents();
  const classes = await createClasses(teachers);
  const assignments = await createAssignments();
  try {
    await Teacher.bulkCreate(teachers);
    await Student.bulkCreate(students);
    await Class.bulkCreate(classes);
    await Assignment.bulkCreate(assignments);
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

// Define the seed function
const handleSeedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedData();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

// Execute the seed function
handleSeedDatabase();