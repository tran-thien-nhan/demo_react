import React from 'react';
import BookItem from './BookItem';
import BookYearPublisher from './BookYearPublisher';

const BookList = () => {
    const books = [
        {
            title: "Đắc nhân tâm",
            author: "Dale Carnegie",
            publisher: "NXB Trẻ",
            year: 2023,
        },
        {
            title: "Hạt giống tâm hồn",
            author: "Various",
            publisher: "NXB Tổng hợp TP.HCM",
            year: 2022,
        },
        {
            title: "Nhà giả kim",
            author: "Paulo Coelho",
            publisher: "NXB Văn học",
            year: 2021,
        }
    ];
    return (
        <div>
            {
                books.map(
                    (book, index) =>
                        <>
                            <div className='d-flex'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <BookItem key={index} book={book} />
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card-body'>
                                        <BookYearPublisher key={index} book={book} />
                                    </div>
                                </div>
                            </div>
                        </>
                )
            }
        </div>
    );
}

export default BookList;