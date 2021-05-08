import React, {useState, createContext} from 'react'

export const LoanBookContext = createContext();

export const LoanBookProvider = (props)=>{
    const [loanBooks, setLoanBooks] = useState([
        {atLoan: true, uuid: 2234231231},
        {
            title: 'this is a new book',
            personName: 'kimbi',
            personContact: 671233443,
            Loandate: '12-34-2020',
            returndate: '12-34-2020'
        },
        {
            title: 'A brief History of time',
            personName: 'Stephen Hawkings',
            personContact: 655270011,
            Loandate: '12-34-2020',
            returndate: '12-34-2020'
        },
        {
            title: 'the theory of quantum relativity',
            personName: 'Albert Eistein',
            personContact: 679500109,
            Loandate: '12-34-2020',
            returndate: '12-34-2020',
        }
    ])

    return(
        <LoanBookContext.Provider value = {[loanBooks, setLoanBooks]}>
            {props.children}
        </LoanBookContext.Provider>
    )
}
