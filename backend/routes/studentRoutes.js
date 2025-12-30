const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentsByID,
  updateStudent,
  deleteStudent,
  deleteAllStudents
} = require("../controllers/studentController");

// ROUTES
router.get("/", getStudents);
router.get("/:id", getStudentsByID);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.delete("/", deleteAllStudents)

module.exports = router;

