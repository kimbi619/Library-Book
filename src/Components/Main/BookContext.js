import React, {createContext, useState} from 'react';


export const BookContext  = createContext();
export const BookContextProvider = (props) => {

    const [AllBooks, setAllBooks] = useState([
        
        {
            title: 'this is a new book',
            author: 'kimbi',
            isbn: 458295,
            year: '12-34-2020',
            img:'./img/1.jpeg'
        },
        {
            title: 'A brief History of time',
            author: 'Stephen Hawkings',
            isbn: 59340450,
            year: '12-34-2020'
        },
        {
            title: 'the theory of quantum relativity',
            author: 'Albert Eistein',
            isbn: 38023783,
            year: '12-34-2020'
        },
        {
            title: 'the seven books of mosses',
            author: 'James Mosses',
            isbn: 2342,
            year: '12-34-2020'
        },
        {
            title: 'Teen titans go',
            author: 'Christopher Colombus',
            isbn: 12,
            year: '12-34-2020'
        }
    ])
    
    return (
        <BookContext.Provider value = {[AllBooks, setAllBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}
