import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BookHoldContext } from './BookHoldContext';


function Book({book}){


    const [clickedBook, setClickedBook] = useContext(BookHoldContext);
    const showDetail=(book)=>{
        setClickedBook({ clicked: 'true', ...book})
    }

    return(
        <div className="bookItem">
        <table onDoubleClick = {()=>showDetail(book)}>
            <thead>
            <tr draggable="true">
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.year}</td>
            </tr>
            </thead>
        </table>
        </div>
    )
}




Book.propTypes={
    title: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.number,
    year: PropTypes.string
}
export default Book;