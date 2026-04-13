import AppsProvider from '@/Context/apps.provider';
import React from 'react';

const Provider = ({children}) => {
    return (
        <AppsProvider>
            {children}
        </AppsProvider>
    );
};

export default Provider;