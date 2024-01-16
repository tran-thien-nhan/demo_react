import React, { useState } from 'react';

const ChangColor = () => {
    const [name, setName] = useState("Nguyễn Văn A");
    const [age, setAge] = useState(25);
    const [color, setColor] = useState("Blue");
    const [fontweight, setFontweight] = useState("normal");
    const [bgColor, setBgcolor] = useState("white");

    // Hàm xử lý sự kiện khi người dùng click để thay đổi giá trị biến name
    const handleClick = () => {
        if (color == "Blue") {
            setColor("red");
            setFontweight("bold");
            setBgcolor("yellow");
        }
        else {
            setColor("Blue");
            setFontweight("normal");
            setBgcolor("white");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p style={{ color: color, fontWeight: fontweight, backgroundColor: bgColor}}>Name: {name} - Age: {age} </p>
                            <button onClick={handleClick} className='btn btn-success'>Change !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default ChangColor;
