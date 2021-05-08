import {useState, useContext} from 'react';
import { BookContext } from './Main/BookContext';

function Search(){

    const [allBooks, setBook] = useContext(BookContext);
    const [search, setSearch] = useState('');
    const clear = ()=>{
        setSearch('');
    }
    const searchBook = e=>{
        const item = e.target.value;
        setSearch(item);
        // if(item.length > 0){
            // setBook( allBooks.filter(book =>book.includes(item)))
        // }else{
        //     return
        // }
        
    }
    return(
        <div className = "searchBar">
            <div className = 'searchdiv'>
            <input onChange = {(e) =>searchBook(e)} value = {search} type ="text" placeholder = "Search..."></input>
            <div className="cross" draggable ='true' onClick = {() =>clear()} >x</div>
            </div>
        </div>
    )
}
export default Search;