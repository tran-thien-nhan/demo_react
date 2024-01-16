import React from 'react';

const UserList = () => {
    // Mảng đối tượng người dùng
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
    ];

    return (
        <div>
            <h2>Danh Sách Người Dùng</h2>
            <ul>
                {/* Sử dụng hàm map để lặp qua mảng và hiển thị thông tin người dùng */}
                {users.map((user) => (
                    <li style={{listStyle:'none'}}>
                        {user.id}. {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
