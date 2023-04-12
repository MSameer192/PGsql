const { Router } = require("express");
const router = Router()
const controller = require('./controller')

router.get('/', controller.getStudents);
router.post('/', controller.addStudents);
router.get('/:id', controller.getStudentsById);
router.delete('/:id', controller.deleteStudentsById);
router.put('/:id', controller.updateStudentById);


module.exports = router;