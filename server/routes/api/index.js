const router = require('express').Router();

const teacherRoutes = require('./teacherRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);

module.exports = router;