import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Stop! Count cannot go below zero.");
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-success" onClick={handleIncrement}>
                +
            </button>
            <p className="mx-3 my-3">{count}</p>
            <button className="btn btn-success" onClick={handleDecrement}>
                -
            </button>
        </div>
    );
}

export default Counter;