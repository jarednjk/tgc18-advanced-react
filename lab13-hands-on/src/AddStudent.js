import React, {useState, useContext} from 'react';
import StudentContext from './StudentContext';

export default function AddStudent() {
    const context = useContext(StudentContext);

    const [formState, setFormState] = useState({
        studentName: "",
        studentNumber: "",
        year: "",
        gender: "male",
        graduated: "false"
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <div>
                <label>Name:</label>
                <input type="text" name="studentName" value={formState.studentName} onChange={updateFormField} />
            </div>
            <div>
                <label>Student Number:</label>
                <input type="text" name="studentNumber" value={formState.studentNumber} onChange={updateFormField} />
            </div>
            <div>
                <label>Year:</label>
                <input type="text" name="year" value={formState.year} onChange={updateFormField} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" name="gender" value="male" checked={formState.gender === 'male'} onChange={updateFormField} />
                <label>Male</label>
                <input type="radio" name="gender" value="female" checked={formState.gender === 'female'} onChange={updateFormField} />
                <label>Female</label>
            </div>
            <div>
                <label>Graduated:</label>
                <input type="radio" name="graduated" value="true" checked={formState.graduated === 'true'} onChange={updateFormField} />
                <label>Yes</label>
                <input type="radio" name="graduated" value="false" checked={formState.graduated === 'false'} onChange={updateFormField} />
                <label>No</label>
            </div>
            <button onClick={()=>{context.addStudent(formState)}}>Submit</button>
        </React.Fragment>
    )
}