'use client'
import React, { createContext, useState } from 'react';

export const AppContext = createContext('AppContext');
const AppsProvider = ({children}) => {

    const [click,setClick] = useState([])
    const [det,setDet] = useState()

    // console.log(det)

    return (
        <AppContext.Provider value={{click,setClick,det,setDet}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppsProvider;