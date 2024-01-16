import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ListAccountComponent = () => {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleList = async () => {
        try {
            const username = sessionStorage.getItem('username');
            const password = sessionStorage.getItem('password');
            const checkLogin = await axios.get(`https://localhost:7092/api/Account/checklogin/${username}/${password}`);
            if (checkLogin.data === true) {
                setLoginSuccess(true);
                const response = await axios.get("https://localhost:7092/api/Account/getall");
                setAccounts(response.data);
            } else {
                navigate('/login');
            }
        } catch (error) {
            Swal.fire('Error', 'Error retrieving account list', 'error');
        }
    };

    useEffect(() => {
        handleList();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Account List</h1>
                    {accounts.sort((a, b) => a.balance - b.balance).map((account) => (
                        <div className="card mb-3" key={account.id}>
                            <div className="card-body">
                                <h4 className="card-title">{account.username}</h4>
                                <p className="card-text">Balance: {account.balance}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListAccountComponent;