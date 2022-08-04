import React from 'react';
// a hook is a function provdied by react or 3rd party package
// useNavigate creats a function that we can use to change 'pages'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ContactUs() {
    const navigate = useNavigate();

    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");

    // const updateFullName = (e) => {
    //     setFullname(e.target.value);
    // }

    // const updateEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    const [formState, setFormState] = useState({
        fullname: '',
        email: ''
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    function submitForm() {
        navigate('/form-submitted');
    }

    return (

        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={formState.email} onChange={updateFormField} />
            </div>
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>

    )
}