import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2 library

const TransactionComponent = () => {
    const navigate = useNavigate(); // Change from useHistory to useNavigate
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [balance, setBalance] = useState(sessionStorage.getItem('balance') || '0'); // Convert balance to string

    const handleTransaction = async (event, type) => {
        event.preventDefault();

        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');
        let balance = sessionStorage.getItem('balance');

        let response;
        let newBalance;

        if (type === 'withdraw') {
            if (amount > 0) {
                response = await axios.get(`https://localhost:7092/api/Account/withdraw/${username}/${amount}`);
                if (response.status === 200) {
                    newBalance = await axios.get(`https://localhost:7092/api/Account/getone/${username}/${password}`);
                    newBalance = newBalance.data.balance; // Extract balance value
                    sessionStorage.setItem('balance', newBalance);
                    setBalance(newBalance.toString());
                    Swal.fire('Success', 'Withdraw successfully!', 'success');
                    setTimeout(() => {
                        Swal.close(); // Close the SweetAlert2 message
                    }, 1000);
                } else {
                    setError('Withdraw fail...!');
                }
            } else {
                setError('Transaction fail...!');
                Swal.fire('Error', 'withdraw fail...!', 'error');
                setTimeout(() => {
                    Swal.close(); // Close the SweetAlert2 message
                }, 1000);
            }
        } else if (type === 'deposit') {
            if (amount > 0) {
                response = await axios.get(`https://localhost:7092/api/Account/deposit/${username}/${amount}`);
                if (response.status === 200) {
                    newBalance = await axios.get(`https://localhost:7092/api/Account/getone/${username}/${password}`);
                    newBalance = newBalance.data.balance; // Extract balance value
                    sessionStorage.setItem('balance', newBalance);
                    setBalance(newBalance.toString());
                    Swal.fire('Success', 'Deposit successfully!', 'success');
                    setTimeout(() => {
                        Swal.close(); // Close the SweetAlert2 message
                    }, 1000);
                } else {
                    setError('Deposit fail...!');
                    Swal.fire('Error', 'Deposit fail...!', 'error');
                    setTimeout(() => {
                        Swal.close(); // Close the SweetAlert2 message
                    }, 1000);
                }
            } else {
                setError('Transaction fail...!');
                Swal.fire('Error', 'Deposit fail...!', 'error');
                setTimeout(() => {
                    Swal.close(); // Close the SweetAlert2 message
                }, 1000);
            }
        }
        else {
            setError('Transaction fail...!');
            Swal.fire('Error', 'Transaction fail...!', 'error');
            setTimeout(() => {
                Swal.close(); // Close the SweetAlert2 message
            }, 1000);
        }
    };

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="card" style={{ width: '500px' }}>
                    <div className="card-body">
                        <h3 className="card-title">Transaction</h3>
                        <h3>Username: {sessionStorage.getItem('username')}</h3>
                        <h3>Balance: {balance}</h3>
                        <div>
                            <form className="d-flex">
                                <div className="mx-2">
                                    <input type="text" className="form-control" name="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} />
                                </div>
                                <div>
                                    <input type="submit" value="withdraw" name="withdraw" className="btn btn-primary mx-2" onClick={e => handleTransaction(e, 'withdraw')} />
                                    <input type="submit" value="deposit" name="deposit" className="btn btn-success mx-2" onClick={e => handleTransaction(e, 'deposit')} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionComponent;