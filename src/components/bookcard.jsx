import React from 'react';
import './bookcard.css';

const BookCard = ({book}) => {
    return (
        <div className='book-card'>
            < img src={book.image} alt={book.title} className='book-image'/>  
            <div className='book-details'>
                <h3 className='book-title'>{book.name}</h3>
                <p className='book-author'>{book.author}</p>
                <p className='book-genre'>{book.genre}</p>
                {/* <p className='book-price'>{book.price}</p> */}
            </div>
        </div>
    )
}

export default BookCard;