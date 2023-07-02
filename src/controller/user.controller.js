const {pool} = require("../database")

async function getUser(req, res){
    let sql = 'SELECT * FROM reto1.students;'

    if(req.query.alumnos_id){
        sql = `SELECT * FROM reto1.students WHERE student_id = ${req.query.alumnos_id};`
    }

    try{
        const[result] = await pool.query(sql)
        res.send(result);

    }   catch(error){
        res.send(error);
    }
}

async function postUser(req, res){
    let sql = `INSERT INTO reto1.students (student_id, first_name, last_name, group_id, año_ingreso) VALUES (?, ?, ?, ?, ?);` 
    const{student_id, first_name, last_name, group_id, año_ingreso} = req.body
    const params = [student_id, first_name, last_name, group_id, año_ingreso]

    try{
        const [result] = await pool.query(sql, params)
        res.send(result);
    }   catch(error) {
        res.send(error);
    }
}

async function putUser(req, res){
    const sql = `UPDATE reto1.students 
    SET first_name = COALESCE (?, first_name),
    last_name = COALESCE (?, last_name),
    group_id = COALESCE (?, group_id),
    año_ingreso = COALESCE (?, año_ingreso)
    WHERE student_id = ?;
    `
    const {student_id, first_name, last_name, group_id, año_ingreso} = req.body

    const params = [
        first_name? first_name: null,
        last_name? last_name: null,
        group_id? group_id:null,
        año_ingreso? año_ingreso:null,
        student_id
    ]

    try{
        const [result] = await pool.query(sql, params)
        res.send(result);
    }   catch(error) {
        res.send(error);
    }
}

async function deleteUser(req, res){
    let sql = 'DELETE FROM reto1.students WHERE student_id = ?;'

    const {student_id} = req.body

    const params = [student_id]

    try{
        const [result] = await pool.query(sql, params)
        res.send(result);
    }   catch(error) {
        res.send(error);
    }
}

module.exports = {getUser, postUser, putUser, deleteUser};