import React, { useState } from 'react';

const ListManager = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  }

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default ListManager;
