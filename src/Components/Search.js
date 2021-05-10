import {useState, useContext} from 'react';
import { BookContext } from './Main/BookContext';
import {LoanBookContext} from './Main/LoanBookContext'



function Search(){

    const [allBooks, setBook] = useContext(BookContext);
    const [search, setSearch] = useState('');

    // ---------------------clear content in search input field
    const clear = ()=>{
        setSearch('');
    }

    // ---------------------loop through the array of books and return searched books
    
    const searchBook = e=>{
        let value = e.target.value;
        setSearch(value);
        
        let filteredBooks = [];

        for(let i = 0; i<allBooks.length;i++){
            value = value.toLowerCase();
            const titleSearch = allBooks[i].title.toLowerCase();

            if(titleSearch.includes(value)){
                filteredBooks.push(allBooks[i])
            }
            setBook(filteredBooks)
        }
        

    }
    
    
    return(
        <div className = "searchBar">
            <div className = 'searchdiv'>
            <input onChange = {searchBook} value = {search} type ="text" placeholder = "Search..."></input>
            <div className="cross" draggable ='true' onClick = {() =>clear()} >x</div>
            </div>
        </div>
    )
}
export default Search;