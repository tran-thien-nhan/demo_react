import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Counter = () => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);    // [1, 2, 3, 4, 5]    

    const handleIncreasePrice = () => {
        setPrice(price + 1);
    }
    const handleDecreasePrice = () => {
        if (price === 0) {
            Swal.fire('Không thể giảm nữa!');
            return;
        }
        setPrice(price - 1);
    }
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (quantity === 0) {
            Swal.fire('Không thể giảm nữa!');
            setQuantity(0);
            return;
        }
        setQuantity(quantity - 1);
    }
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-success mx-2' onClick={handleIncreasePrice}>+</button>
                <h5>Price: {price}$</h5>
                <button className='btn btn-success mx-2' onClick={handleDecreasePrice}>-</button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary mx-2' onClick={handleIncreaseQuantity}>+</button>
                <h5>Quantity: {quantity}</h5>
                <button className='btn btn-primary mx-2' onClick={handleDecreaseQuantity}>-</button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <h5>Total: {price * quantity}$</h5>
            </div>
        </div>
    );
}

export default Counter;