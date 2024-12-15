const db = require('../config/db')

const getAllStudent = async () => {
    const [rows] = await db.query('SELECT * from siswa1')
    return rows;
};

const getStudentById = async (id) => {
    const [row] = await db.query('SELECT * FROM siswa1 WHERE id = ?', [id]);
    return row[0];
};

const addStudent = async (student) =>{
    const {name,email,phone} = student
    const [result] =
     await db.query('insert into siswa1(name,email,phone) values(?,?,?)',
        [name,email,phone])
     return result.insertId;

}
module.exports = {
    getAllStudent,
    getStudentById,
    addStudent
};