import React from 'react';

const BookItem = ({ book }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p className="card-text">Tác giả: {book.author}</p>
            </div>
        </div>
    );
}

export default BookItem;