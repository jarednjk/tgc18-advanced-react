import React, {useContext} from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {
    const context = useContext(StudentContext)

    return (
        <React.Fragment>
            {context.getStudents().map(s => {
                return <div>
                    <p>Student Name: {s.studentName}</p>
                    <p>Student Number: {s.studentNumber}</p>
                    <p>Year of Study: {s.year}</p>
                    <p>Gender: {s.gender}</p>
                    <p>Graduated: {s.graduated ? 'Yes' : 'No'}</p><br/>
                    <button onClick={()=>{
                        context.deleteStudent(s.id)
                    }}>Delete</button>
                </div>
            })}
        </React.Fragment>
    )
}