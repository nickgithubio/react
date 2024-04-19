import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Student = () => {
    const param =useParams();
    const [studentInfo,setStudentInfo]=useState([
        {sid:"1",
         sname:"Student1",
        marks:"90%"},
        {sid:"2",
         sname:"Student2",
        marks:"90%"},
        {sid:"3",
         sname:"Student3",
        marks:"90%"},
    ]);
  return (
    <div>
      <h1>Student</h1>
     {param.name ? JSON.stringify(studentInfo.find((student)=>student.sname===param.name)) 
     :  JSON.stringify(studentInfo) };
    </div>
  )
}

export default Student