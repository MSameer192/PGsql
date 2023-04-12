const pool = require('../db');
const queries = require('./quries');


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        // if (error) throw error;
        if (error) {
            console.error(error);
            res.status(500).send('Error updating student');
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating student');
            return;
        }
        res.status(200).json(results.rows);
    });
};


const getStudentsByName = (req, res) => {
    const name = req.params.name;
    pool.query(queries.getStudentByName, [name], (error, results) => {
        // if (error) throw error;
        if (error) {
            console.error(error);
            res.status(500).send('Error updating student');
            return;
        }
        res.status(200).json(results.rows);
    });
};


const addStudents = (req, res) => {
    const { name, email, agr, dob } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }
        // add students to db
        pool.query(
            queries.addStudents,
            [name, email, agr, dob],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error updating student');
                    return;
                }
                res.status(201).send("Student Created Successfully")
            })
    });
}


const deleteStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not exists')
        }

        pool.query(queries.deleteStudentsById, [id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating student');
                return;
            }
            res.status(200).send('Student Remove Sucessfully')
        });

    });
};


const updateStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, agr, dob } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not exists')
        }

        const updateValues = [name, email, agr, dob];
        // const updateColumns = ['name', 'email', 'agr', 'dob'];
        // const updateParams = updateColumns.map((col, index) => `${col} = $${index + 1}`).join(', ');
        //its query ==> UPDATE studnts SET ${updateParams} WHERE id = $${updateValues.length + 1}

        pool.query(queries.updateStudentById, [...updateValues, id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating student');
                return;
            }
            res.status(200).send('Student Update Successfully')
        });
    });
};

const updateStudentByName = (req, res) => {
    const name = req.params.name;

    pool.query(queries.getStudentByName, [name], (error, results) => {
        const { name, email, agr, dob } = req.body;
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not exists')
        }

        const updateValues = [name, email, agr, dob];
        // const updateColumns = ['name', 'email', 'agr', 'dob'];
        // const updateParams = updateColumns.map((col, index) => `${col} = $${index + 1}`).join(', ');

        pool.query(queries.updateStudentByName, [...updateValues, name], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating student');
                return;
            }
            res.status(200).send('Student Update Successfully')
        });
    });
};





module.exports = {
    getStudents,
    getStudentsById,
    getStudentsByName,
    addStudents,
    deleteStudentsById,
    updateStudentById,
    updateStudentByName
};

