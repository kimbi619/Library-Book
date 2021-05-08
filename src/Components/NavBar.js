import {Link} from 'react-router-dom';
import Search from './Search';
function NavBar(){


    // this section of code is to be uptimized with due time=========VIP

    // const changeToLoan=(e)=>{
    //     const item = e.target.parentElement
    //     item.classList.add('active');
    //     item.previousElementSibling.classList.remove('active');
    // }
    // const changeToBook = (e)=>{
    //     const item = e.target.parentElement
    //     item.classList.add('active');
    //     item.nextElementSibling.classList.remove('active');
    //   }
    // End of optimization section of code===========================

    
    return(
        <div className ="navBar">
            <div className="wrapper">
                <h2 className = "logo">asguard school library</h2>
                <div className = "navLinks">
                    <ul>
                        <li className="active"><Link to = '/allbooks'>All Books</Link></li>
                        <li><Link to = '/loanedbooks'>Loan Books</Link></li>
                        <li><a href="#@">recieve books</a></li>
                    </ul>
                </div>
                <Search />
            </div>
        </div>
    )
}
export default NavBar;