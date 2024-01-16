import React, { useState } from 'react';

const SearchFeature = () => {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Doe", age: 22 },
    { id: 4, name: "Alice", age: 28 },
    { id: 5, name: "Bob", age: 18 },
  ];

  const [items, setItems] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toString().includes(searchTerm)
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  });

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Sort by Age:</label>
        <select
          className="form-control"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul className="list-group">
        {sortedItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFeature;
