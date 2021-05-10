import React, { createContext, useState } from 'react';

export const SearchContext = createContext();



export const SearchContextProvider =( props )=>{
    const [search, setSearch] = useState(null);

    return(
        <SearchContext.Provider value = "hellooo Searching data">
            {props.children}
        </SearchContext.Provider>
    )
}