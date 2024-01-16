import React from 'react';

const BookYearPublisher = ({book}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{book.publisher}</h2>
                <p className="card-text">Tác giả: {book.year}</p>
            </div>
        </div>
    );
}

export default BookYearPublisher;