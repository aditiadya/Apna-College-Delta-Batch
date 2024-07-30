import { useState } from "react";

export default function Form () {

    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }
    // let handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    // }
    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name : </label>
            <input placeholder="Enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br />

            <label htmlFor="username">Username : </label>
            <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br />

            <label htmlFor="password">Password : </label>
            <input placeholder="Enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}