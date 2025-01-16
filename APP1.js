mport React, { useState } from "react"; 

const App = () => { 
  const [students, setStudents] = useState([ 
    { id: 1, name: "Alice", percentage: 90 }, 
    { id: 2, name: "Bob", percentage: 75 }, 
    { id: 3, name: "Charlie", percentage: 88 }, 
    { id: 4, name: "Diana", percentage: 60 }, 
    { id: 5, name: "Eve", percentage: 55 }, 
    { id: 6, name: "Frank", percentage: 85 }, 
  ]); 
 
  const [filter, setFilter] = useState("all"); 
  const [newStudent, setNewStudent] = useState({ name: "", percentage: "" }); 
 
  // Filter students by category 
  const filteredStudents = students.filter((student) => { 
    if (filter === "distinction") return student.percentage >= 85; 
    if (filter === "first-class") 
      return student.percentage >= 60 && student.percentage < 85; 
    return true; 
  }); 
 
  // Count students by categories 
  const distinctionCount = students.filter( 
    (student) => student.percentage >= 85 
  ).length; 
 
  const firstClassCount = students.filter( 
    (student) => student.percentage >= 60 && student.percentage < 85 
  ).length; 
 
  // Handle new student form submission 
  const addStudent = (e) => { 
    e.preventDefault(); 
    const { name, percentage } = newStudent; 
    const percentageNumber = parseFloat(percentage); 
 
    if (!name || isNaN(percentageNumber) || percentageNumber < 0 || percentageNumber > 100) { 
      alert("Please enter a valid name and percentage (0-100)."); 
      return; 
    } 
 
    const newId = students.length ? students[students.length - 1].id + 1 : 1; 
    setStudents([...students, { id: newId, name, percentage: percentageNumber }]); 
    setNewStudent({ name: "", percentage: "" }); 
  }; 
 
  return ( 
    <div className="App"> 
      <h1>Student Exam Analysis</h1> 
 
      <div className="summary"> 
        <p> 
          <strong>Total Students:</strong> {students.length} 
        </p> 
        <p> 
          <strong>Distinction (85% and above):</strong> {distinctionCount} 
        </p> 
        <p> 
          <strong>First Class (60% to 84%):</strong> {firstClassCount} 
        </p> 
      </div> 
 
      <form className="add-student-form" onSubmit={addStudent}> 
        <h2>Add New Student</h2> 
        <input 
          type="text" 
          placeholder="Name" 
          value={newStudent.name} 
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} 
        /> 
        <input 
          type="number" 
          placeholder="Percentage" 
          value={newStudent.percentage} 
          onChange={(e) => setNewStudent({ ...newStudent, percentage: e.target.value })} 
        /> 
        <button type="submit">Add Student</button> 
      </form> 
 
      <div className="filters"> 
        <h2>Filter Students</h2> 
        <button onClick={() => setFilter("all")}>All</button> 
        <button onClick={() => setFilter("distinction")}>Distinction</button> 
        <button onClick={() => setFilter("first-class")}>First Class</button> 
      </div> 
 
      <h2>Student List</h2> 
      <ul> 
        {filteredStudents.map((student) => ( 
          <li key={student.id}> 
            {student.name}: {student.percentage}% 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default App; 
