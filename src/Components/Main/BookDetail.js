import './BookDetails.css';
import PropTypes from 'prop-types';
import {useContext, useEffect} from 'react';
import {BookHoldContext} from './BookHoldContext';
import defaultLogo from './img/Asguard.png';


const BookDetail = () => {

        const bookItem = {
            author: '',
            title: ' ',
            isbn: 0,
            img: '',
            isClicked: false
        };
        const [clickedBook, setClickedBook] = useContext(BookHoldContext);
        if(clickedBook === null){
            
        }else{;
            const {title, author, isbn, img} = clickedBook;
            bookItem.title = title;
            bookItem.author = author;
            bookItem.isbn = isbn;
            bookItem.isClicked = true;
            bookItem.img = img;
        }
        useEffect(() => {
            const currentBook = document.querySelector('.bookToLoan');
            const shadow = document.querySelector('.shadow');
            if(bookItem.isClicked){
                currentBook.classList.add('show');
            }
            shadow.addEventListener('click', ()=>{
                bookItem.isClicked = false;
                currentBook.classList.remove('show')
            })
        });
        
        
        const onsubmit=(e)=>{
            e.preventDefault();
            const currentBook = document.querySelector('.bookToLoan');
            bookItem.isClicked = false;
            currentBook.classList.remove('show')
            
        }
    return (
        <div className={`bookToLoan`} >
            <div className="shadow" onClick={()=>bookItem.isClicked=false}></div>
            <div className="clickedBook">
                <div className="imgContainer"> 
                    <div className="imgWrapper"><img src={defaultLogo} alt="default"/></div>
                </div>
                <div className="bookContentWrapper">
                    <h2><span className="placeholder">Title:</span>{bookItem.title}</h2>
                    <p className="author"><span className="placeholder">Author:</span>{bookItem.author}</p>
                    <p className="state"><i>copies remaining: All sold out</i></p>
                    <form id="loanForm" onSubmit={onsubmit}>
                        <p className="desc"><i>Loan book to</i></p>
                        <input className="input" type="text" placeholder="enter name"></input>
                        <input className="input" type="text" placeholder="Enter id card number"></input>
                        <input id="date" type="date"min={`2021/04/17`}></input>
                        <button className="loanBtn"><i>Loan Book</i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

BookDetail.propTypes = {
    // img: PropTypes.string,

}
// PropTypes.default

export default BookDetail
