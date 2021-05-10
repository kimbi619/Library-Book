import React, {createContext, useState} from 'react'


// ------------------this is a useContext design to hold the current book the user clicks on
// ------------------so as to display it during loan book event



export const BookHoldContext = createContext();

export const BookHoldProvider = (props)=>{
    const [clickedBook, setClickedBook] = useState(null);

    return(
        <BookHoldContext.Provider value={[clickedBook, setClickedBook]}>
            {props.children}
        </BookHoldContext.Provider>
    )
}
