
function Loan({book}){


    return(
        <table>
            <thead>
            <tr draggable="true" style={LoanStyle}>
                <td>{book.personName}</td>
                <td>{book.title}</td>
                <td>{book.personContact}</td>
                <td>{book.Loandate}</td>
                <td>{book.returndate}</td>
            </tr>
            </thead>
        </table>
    )
}

const LoanStyle={
    gridTemplateColumns: '1.5fr 2.3fr 1fr 1fr 1fr',
}
export default Loan;