import './App.css';
import React, { useState } from 'react';
import StudentContext from './StudentContext';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {

  const [students, setStudents] = useState([
    {
      id: Math.floor(Math.random()*10000 + 1000),
      studentName: 'Jacky',
      studentNumber: 101,
      year: 2021,
      gender: 'male',
      graduated: false
    },
    {
      id: Math.floor(Math.random()*10000 + 1000),
      studentName: 'Julian',
      studentNumber: 102,
      year: 2020,
      gender: 'male',
      graduated: true
    },
    {
      id: Math.floor(Math.random()*10000 + 1000),
      studentName: 'Jenny',
      studentNumber: 103,
      year: 2019,
      gender: 'female',
      graduated: false
    }
  ])

  const context = {
    getStudents: () => {
      return students;
    },
    addStudent(newStudent) {


      // if doing mongo or mysql, must use restful api to add new student to database
      // then thre response of API must include the new ID
      newStudent.id = Math.floor(Math.random() * 10000 + 1000);
      setStudents([
        ...students,
        newStudent
      ])
    },
    deleteStudent(studentId) {
      const indexToDelete = students.findIndex ( s => s.id === studentId);
      const clone = [...students.slice(0, indexToDelete),
                     ...students.slice(indexToDelete + 1)];
      setStudents(clone);
    }

  }


  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <h1>School Enrollment and Management System</h1>
        <StudentList />
        <AddStudent />
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
