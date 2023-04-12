const getStudents = 'SELECT * FROM studnts';
const getStudentById = 'SELECT * FROM studnts WHERE id = $1';
const checkEmailExists = 'SELECT s FROM studnts s WHERE s.email = $1'
const addStudents = "INSERT INTO studnts (name, email, agr, dob) VALUES ($1, $2, $3, $4)";
const deleteStudentsById = "DELETE FROM studnts WHERE id = $1;";
const updateStudentById = 'UPDATE studnts SET name = $1 WHERE id = $2'

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudents,
    deleteStudentsById,
    updateStudentById
}

