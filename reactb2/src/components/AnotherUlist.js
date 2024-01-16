import React from 'react';

function AnotherUlist(props) {
    const users = [
        { id: 1, name: "tran", age: 18 },
        { id: 2, name: "thien", age: 21 },
        { id: 3, name: "nhan", age: 22 },
    ];

    const filterAgeOver20 = users.filter(u => u.age >= 20);
    return (
        <div>
            <h2> danh sách users</h2>
            <ul>
                {
                    users.map((u) => (
                        <li style={{listStyle:'none'}}>
                            {u.id} - {u.name} - {u.age}
                        </li>
                    ))
                }
            </ul>
            <h2> danh sách users trên 20 tuổi </h2>
            <ul>
                {
                    filterAgeOver20.map((u) => (
                        <li style={{listStyle:'none'}}>
                            {u.id} - {u.name} - {u.age}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AnotherUlist;