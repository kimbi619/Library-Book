import Book from './Book';
import { BookHoldProvider } from './BookHoldContext'
import {useContext, useState} from 'react'
import {BookContext} from './BookContext'
import BookDetail from './BookDetail';

function Books(){

    const [AllBooks, setAllBooks] = useContext(BookContext)
    const showDetail =(book)=>{
        console.log(book);
    }

    return(
        <div id="book">
            <BookHoldProvider>
            <div className="container">
                <table>
                    <thead>
                    <tr>
                        <th>title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                </table>
                <ul className="bookItem">
                    {
                    AllBooks.map((book)=>(
                        <li key={book.isbn} ><Book book={book} showDetail={showDetail} /></li>
                    ))}
                </ul>
            </div>
            <BookDetail showDetail = {showDetail}/>
            </BookHoldProvider>
        </div>
    )
}

export default Books;