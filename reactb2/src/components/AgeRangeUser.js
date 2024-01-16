import React from 'react';

function AgeRangeUser(props) {
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
    const newRange = users.filter(u => u.age >= 20 && u.age <= 29);
    return (
        <div>
            <h2>danh sách users từ 20-29 tuổi</h2>
            <ul>
                {
                    newRange.map((u) => (
                        <li style={{listStyle:'none'}}>
                            {u.id} - {u.name} - {u.age}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AgeRangeUser;