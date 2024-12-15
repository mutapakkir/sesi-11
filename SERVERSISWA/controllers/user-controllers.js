const userModel = require('../models/user_models')

const getAllStudent = async (req,res) => {
    try{
        const students = await userModel.getAllStudent();
        if(!student)res.json({ message : 'Student not Found'})
            res.json(student)
    }
    catch(err){
        res.json({ message : 'Eror Get All Student'})  
    }
    
};
//const getStudentById = async(req,res) => {
  //  const {id} = req.params;
    //try{
      //  const student = await userModel.getStudentById(req.params.id);
        //if (student){
          //  res.json({ succes : true, data : student});        
        //} else {
          //  res.status(404).json({ succes : false, message :'Student not Found'})
        //}
    //} catch (err){
      //  res.status(500).json({succes : false, message : err.message})
    //}
//}

const getStudentById = async(req,res)=>{
    try{
        const student =
        await userModel.getStudentById(req.params.id)
        if (student.length >0){
            res.status(200).json({message : 'succes',student})
        }
        else{
            res.status(500).json({message : 'student not found'})
            
        }
    }catch(eror){
        console.log(eror);
        res.status(500).json({message : 'Eror Get Student'})
        
    }
}
const addStudent = async (req,res) => {
    try{
        const newStudent =
        await userModel.addStudent(req.body)
        res.status(200).json({id:newStudent,...req.body})
    }catch (eror){
        console.log(eror);
        res.status(500).json({message:'eror insert student'})
        
    }
}
module.exports = {
    getAllStudent,
    getStudentById,
    addStudent}