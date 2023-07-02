const {pool} = require("../database")

const getMedia = async (req, res) =>{

    let sql = `SELECT AVG(mark) as media FROM reto1.marks
                WHERE student_id=?`;

    const {student_id, mark} = req.query

    const params = [student_id, mark]

    try
    {
    const [result] = await pool.query(sql, params)
    res.send(result);
                }
    catch(err) {
    res.send(err)
    }
} 

const getAsignaturas = async (req, res)  => {

    let sql = `SELECT student_id, title FROM students INNER JOIN grupos ON students.group_id = grupos.grupo_id INNER JOIN subject_teachers ON grupos.grupo_id = subject_teachers.group_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id WHERE students.student_id = ?;`
            
    const {student_id} = req.query

    const params = [parseInt(student_id)]

                try
                {
                    const [result] = await pool.query(sql, params)
                    res.send(result);
                }
                catch(err) {
                    res.send(err)
                }
}

const getAsignaturas2 = async (req, res)  => {

    let sql = `SELECT first_name, last_name, title FROM students INNER JOIN grupos ON students.group_id = grupos.grupo_id INNER JOIN subject_teachers ON grupos.grupo_id = subject_teachers.group_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id;`
            

                try
                {
                    const [result] = await pool.query(sql)
                    res.send(result);
                }
                catch(err) {
                    res.send(err)
                }
}

const getImpartidasID = async (req, res)  => {

    let sql = `SELECT teachers.teacher_id, title FROM teachers INNER JOIN subject_teachers ON teachers.teacher_id = subject_teachers.teacher_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id WHERE teachers.teacher_id = ?;`
            
    const {teacher_id} = req.query

    const params = [parseInt(teacher_id)]

                try
                {
                    const [result] = await pool.query(sql, params)
                    res.send(result);
                }
                catch(err) {
                    res.send(err)
                }
}

const getImpartidasID2 = async (req, res)  => {

    let sql = `SELECT first_name, last_name, title FROM teachers INNER JOIN subject_teachers ON teachers.teacher_id = subject_teachers.teacher_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id;`
            

                try
                {
                    const [result] = await pool.query(sql)
                    res.send(result);
                }
                catch(err) {
                    res.send(err)
                }
}



module.exports = {getMedia, getAsignaturas, getAsignaturas2, getImpartidasID, getImpartidasID2};
