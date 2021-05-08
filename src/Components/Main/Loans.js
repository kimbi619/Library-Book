import Loan from './Loan';
import {useState, useContext} from 'react';
import {LoanBookContext} from './LoanBookContext';


function Loans(){
    const [loanBooks, setLoanBooks] = useContext(LoanBookContext);
    return(
        <div id="loan">
            <div className="container">
                <table>
                    <thead>
                    <tr style={LoanStyle}>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Contact</th>
                        <th>Loan Day</th> 
                        <th style={returnDay}>Return  Day</th>
                    </tr>
                    </thead>
                </table>
                <ul className="bookItem">
                    {loanBooks.map((book)=>(
                        <li key={book.personContact || book.uuid}><Loan book={book} /></li>
                    ))}
                </ul>
                
            </div>

        </div>
    )
}

const LoanStyle={
    gridTemplateColumns: '1.5fr 2.3fr 1fr 1fr 1fr',
}
const returnDay={
    color: 'black',
    background: 'transparent'
}
export default Loans;