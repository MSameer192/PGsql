const getStudents = 'SELECT * FROM studnts';
const getStudentById = 'SELECT * FROM studnts WHERE id = $1';
const getStudentByName = 'SELECT * FROM studnts WHERE name = $1';
const checkEmailExists = 'SELECT s FROM studnts s WHERE s.email = $1'
const addStudents = "INSERT INTO studnts (name, email, agr, dob) VALUES ($1, $2, $3, $4)";
const deleteStudentsById = "DELETE FROM studnts WHERE id = $1;";
const updateStudentById = 'UPDATE studnts SET name=$1, email=$2, agr=$3, dob=$4 WHERE id=$5';
const updateStudentByName = 'UPDATE studnts SET name=$1, email=$2, agr=$3, dob=$4 WHERE name=$5';


module.exports = {
    getStudents,
    getStudentById,
    getStudentByName,
    checkEmailExists,
    addStudents,
    deleteStudentsById,
    updateStudentById,
    updateStudentByName
}

