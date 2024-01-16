import React, { useState } from 'react';

function AgeRangeUserSorting(props) {
    const [sortedUsers, setSortedUsers] = useState([]);

    const users = [
        { id: 1, name: "tran", age: 18 },
        { id: 2, name: "thien", age: 21 },
        { id: 4, name: "nhan", age: 22 },
        { id: 5, name: "thai", age: 15 },
        { id: 6, name: "thi", age: 16 },
        { id: 7, name: "diem", age: 29 },
        { id: 8, name: "my", age: 21 },
        { id: 9, name: "van", age: 10 },
        { id: 10, name: "tien", age: 30 },
        { id: 11, name: "nguyen", age: 20 },
    ];
    
    const handleSort = (order) => {
        const sorted = [...users].sort((a, b) => {
            if (order === 'asc') {
                return a.age - b.age;
            } else {
                return b.age - a.age;
            }
        });
        setSortedUsers(sorted);
    };

    return (
        <div>
            <h2>Danh sách users từ 20-29 tuổi</h2>
            <div>
                <button onClick={() => handleSort('asc')}>Sắp xếp tăng dần</button>
                <button onClick={() => handleSort('desc')}>Sắp xếp giảm dần</button>
            </div>
            <ul>
                {sortedUsers.length > 0
                    ? sortedUsers.map((u) => (
                        <li style={{ listStyle: 'none' }}>
                            {u.id} - {u.name} - {u.age}
                        </li>
                    ))
                    : users.map((u) => (
                        <li style={{ listStyle: 'none' }}>
                            {u.id} - {u.name} - {u.age}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default AgeRangeUserSorting;
