import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Menu = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = sessionStorage.getItem('user');

    useEffect(() => {
        const checkLogin = async () => {
            const username = sessionStorage.getItem('username');
            const password = sessionStorage.getItem('password');
            try {
                const response = await axios.get(`https://localhost:7092/api/Account/checklogin/${username}/${password}`);
                if (response.data === true) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    navigate('/login');
                }
            } catch (error) {
                Swal.fire('Error', 'Error in login', 'error');
            }
        };
        checkLogin();
    }, [navigate]);

    const handleLogout = () => {
        // Remove login information from session
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('balance');
        sessionStorage.removeItem('password');

        // Update login status
        setIsLoggedIn(false);

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                {isLoggedIn ? (
                    <>
                        <button className="btn btn-primary mx-2 my-2" onClick={() => navigate('/transaction')}>Transaction</button>
                        <button className="btn btn-success mx-2 my-2" onClick={() => navigate('/list')}>List</button>
                        <button onClick={handleLogout} className='btn btn-warning mx-2 my-2'>Logout</button>
                    </>
                ) : (
                    <button className="btn btn-primary mx-2 my-2" onClick={() => navigate('/login')}>Login</button>
                )}
            </div>
        </div>
    );
};

export default Menu;
