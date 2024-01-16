import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create({ handleCreate }) {
    const [newStudent, setNewStudent] = useState({});
    const navigate = useNavigate(); //tu dong chuyen route

    const handleChange = (e) => {
        setNewStudent({ ...newStudent, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreate(newStudent);
        navigate("/home");
    };

    return (
        <div className="container">
            <h1>Create new Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={newStudent.name || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={newStudent.email || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mark">Mark:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="mark"
                        value={newStudent.mark || ""}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
}

export default Create;