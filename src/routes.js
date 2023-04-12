const { Router } = require("express");
const router = Router()
const controller = require('./controller')

router.get('/', controller.getStudents);
router.post('/', controller.addStudents);
router.get('/:id', controller.getStudentsById);
router.get('/getbyname/:name', controller.getStudentsByName);
router.delete('/:id', controller.deleteStudentsById);
router.put('/:id', controller.updateStudentById);
router.put('/upatebyname/:name', controller.updateStudentByName);


module.exports = router;

