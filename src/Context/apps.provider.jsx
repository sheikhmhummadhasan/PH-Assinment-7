'use client'
import React, { createContext, useState } from 'react';

const AppContext = createContext('AppContext');
const AppsProvider = ({children}) => {

    const [active,setActive] = useState(false)
    return (
        <AppContext.Provider value={active}>
            {children}
        </AppContext.Provider>
    );
};

export default AppsProvider;