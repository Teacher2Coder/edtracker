// Import the dependencies
const express = require('express');
const app = express();
const PORT = 3000;
const { sequelize, testDbConnection } = require('./config/connection');

// Import models
const { Teacher } = require('./models');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    console.log("-----------------------");
    console.log(teachers);
    console.log("-----------------------");
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: 'Failed to fetch teachers' });
  }
});

// app.get('/teachers/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const teacher = await Teacher.findByPk(id);
//     if (!teacher) {
//       return res.status(404).json({ error: 'Teacher not found' });
//     }
//     res.json(teacher);
//   } catch (error) {
//     console.error('Error fetching teacher:', error);
//     res.status(500).json({ error: 'Failed to fetch teacher' });
//   }
// });

// app.post('/teachers', async (req, res) => {
//   const { teacherName, teacherEmail, teacherPassword } = req.body;
//   try {
//     const newTeacher = await Teacher.create({ teacherName, teacherEmail, teacherPassword });
//     res.status(201).json(newTeacher);
//   } catch (error) {
//     console.error('Error creating teacher:', error);
//     res.status(500).json({ error: 'Failed to create teacher' });
//   }
// });

// app.put('/teachers/:id', async (req, res) => {
//   const { id } = req.params;
//   const { teacherName, teacherEmail, teacherPassword } = req.body;
//   try {
//     const teacher = await Teacher.findByPk(id);
//     if (!teacher) {
//       return res.status(404).json({ error: 'Teacher not found' });
//     }
//     await teacher.update({ teacherName, teacherEmail, teacherPassword });
//     res.json(teacher);
//   } catch (error) {
//     console.error('Error updating teacher:', error);
//     res.status(500).json({ error: 'Failed to update teacher' });
//   }
// });

// app.delete('/teachers/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const teacher = await Teacher.findByPk(id);
//     if (!teacher) {
//       return res.status(404).json({ error: 'Teacher not found' });
//     }
//     await teacher.destroy();
//     res.status(204).send();
//   } catch (error) {
//     console.error('Error deleting teacher:', error);
//     res.status(500).json({ error: 'Failed to delete teacher' });
//   }
// });

// app.get('/students', async (req, res) => {
//   try {
//     const students = await Student.findAll();
//     res.json(students);
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     res.status(500).json({ error: 'Failed to fetch students' });
//   }
// });

// app.get('/classes', async (req, res) => {
//   try {
//     const classes = await Class.findAll();
//     res.json(classes);
//   } catch (error) {
//     console.error('Error fetching classes:', error);
//     res.status(500).json({ error: 'Failed to fetch classes' });
//   }
// });

// app.get('/assignments', async (req, res) => {
//   try {
//     const assignments = await Assignment.findAll();
//     res.json(assignments);
//   } catch (error) {
//     console.error('Error fetching assignments:', error);
//     res.status(500).json({ error: 'Failed to fetch assignments' });
//   }
// });

testDbConnection();

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));