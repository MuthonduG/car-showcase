'use client'

import { createContext, useContext, useState } from "react";

// create context
export const SearchContext = createContext();

export const SearchContextProvider = ({ children })=> {
    return (
        <SearchContext.Provider value={'search contect'}>
            {children}
        </SearchContext.Provider>
    )
};

export const useSearchContext = () => useContext(SearchContext);

