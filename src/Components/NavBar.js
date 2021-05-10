import {Link} from 'react-router-dom';
import Search from './Search';
function NavBar(){

    // add style of active on all books component and remove on others
    // in other to indicate that user is on all books tab
    const showAllBooks =e=>{
        const target = e.target.parentElement;
        target.classList.add("active");
        target.nextElementSibling.classList.remove("active");
        
    }
    // Switch style of ACTIVE to the loan books component 
    // in other to indicate that user is on the loan books tab
    const showLoanBooks =e=>{
        const target = e.target.parentElement;
        target.classList.add("active");
        target.previousElementSibling.classList.remove("active");
        
    }

    
    return(
        <div className ="navBar">
            <div className="wrapper">
                <h2 className = "logo">asguard school library</h2>
                <div className = "navLinks">
                    <ul>
                        <li onClick={showAllBooks} className=""><Link to = '/allbooks'>All Books</Link></li>
                        <li onClick={showLoanBooks}><Link to = '/loanedbooks'>Loan Books</Link></li>
                        <li><a href="#@">recieve books</a></li>
                    </ul>
                </div>
                <Search />
            </div>
        </div>
    )
}
export default NavBar;