import React, { useState } from 'react';

function MyName(props) {
    const [name, setName] = useState("Trần Thiện Nhân");
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export default MyName;
