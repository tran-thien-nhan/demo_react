import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home({ students, loading, handleDelete }) {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="display-4">List Student</h1>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mark</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-striped table-hover'>
                            {students.map(stu => (
                                <tr key={stu.id}>
                                    <td>{stu.id}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.mark}</td>
                                    <td>{stu.email}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(stu.id)}>Delete</button>
                                        <button className="btn btn-primary mx-2">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home; 