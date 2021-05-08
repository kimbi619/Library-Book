import React, {createContext, useState} from 'react'

export const BookHoldContext = createContext();

export const BookHoldProvider = (props)=>{
    const [clickedBook, setClickedBook] = useState(null);

    return(
        <BookHoldContext.Provider value={[clickedBook, setClickedBook]}>
            {props.children}
        </BookHoldContext.Provider>
    )
}
