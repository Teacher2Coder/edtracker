// Import Models
import { Teacher, Student } from '../models/index.js';
import { sequelize } from './connection.js';


// Helper functions
const generateRandomName = () => {
  const firstNames = ["Alice", "Bob", "Charlie", "David", "Emily", "Fiona", "George", "Hannah", "Ivy", "Jack"];
  const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

const generateRandomEmail = (name) => {
  const domains = ["example.com", "test.com", "demo.com", "sample.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${name.toLowerCase().replace(/\s+/g, '.')}@${randomDomain}`;
}

const generateRandomPassword = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
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

// Seed the database
const seedTeachers = async () => {
  const teachers = await createTeachers();
  const students = await createStudents();
  try {
    await Teacher.bulkCreate(teachers);
    await Student.bulkCreate(students);
  } catch (error) {
    console.error("Error seeding teachers:", error);
  }
}


// Call the seed function
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedTeachers();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

// Execute the seed function
seedDatabase();