const pool = require('../db');
const queries = require('./quries');


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log("getting stundents");
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log("getting single stundent");
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
                if (error) throw error;
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
            if (error) throw error;
            res.status(200).send('Student Remove Sucessfully')
        });

    });
};

const updateStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student not exists')
        }

        pool.query(queries.updateStudentById, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student Update Sucessfully')
        });
    });
};

module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    deleteStudentsById,
    updateStudentById
};

