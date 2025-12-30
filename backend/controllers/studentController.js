const Student = require("../models/student");

// CREATE
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Read by ID
const getStudentsByID = async (req, res)=>{
  try{
    const students = await Student.findById(req.params.id);
    res.json(students);
  }catch(err){
    res.status(500).json({error:err.message});
  }
};

// UPDATE
const updateStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, course },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//DELETE ALL
const deleteAllStudents = async (req, res)=>{
  try{
    await Student.deleteMany();
    res.json({
      message:"Deleted All Students Data"
    })
    }catch(err){
      res.status(500).json({error: err.message });
    }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentsByID,
  updateStudent,
  deleteStudent,
  deleteAllStudents
};

