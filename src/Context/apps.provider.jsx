'use client'
import React, { createContext, useState } from 'react';

const AppContext = createContext('AppContext');
const AppsProvider = ({children}) => {

    
    return (
        <AppContext.Provider value={''}>
            {children}
        </AppContext.Provider>
    );
};

export default AppsProvider;