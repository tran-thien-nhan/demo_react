import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2 library

const LoginComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false); // New state for login success

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://localhost:7092/api/Account/login/${username}/${password}`);

            if (response.status === 200) {
                const acc = response.data;
                if (acc) {
                    // Login successful
                    setError(null);
                    setLoginSuccess(true); // Set login success to true

                    // Save login information in session
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('balance', acc.balance);

                    // Additional code to save all login information in session
                    sessionStorage.setItem('password', acc.password);

                    Swal.fire('Success', 'Login successful!', 'success'); // Display SweetAlert2 success message

                    setTimeout(() => {
                        Swal.close(); // Close the SweetAlert2 message
                    }, 1000);

                    // Redirect to transaction page after 1 second
                    setTimeout(() => {
                        navigate('/transaction');
                    }, 1000);
                } else {
                    // Login failed
                    setError('Wrong username or password');
                    Swal.fire('Error', 'Wrong username or password', 'error'); // Display SweetAlert2 error message
                    setTimeout(() => {
                        Swal.close(); // Close the SweetAlert2 message
                    }, 1000);
                }
            } else {
                // Login failed
                setError('login failed');
                Swal.fire('Error', 'login failed', 'error'); // Display SweetAlert2 error message
                setTimeout(() => {
                    Swal.close(); // Close the SweetAlert2 message
                }, 1000);
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred');
            Swal.fire('Error', 'An error occurred', 'error'); // Display SweetAlert2 error message
            setTimeout(() => {
                Swal.close(); // Close the SweetAlert2 message
            }, 1000);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="display-4">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <button onClick={handleLogin} className='btn btn-success'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;