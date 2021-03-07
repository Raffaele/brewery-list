import React, { createContext } from 'react';

import { useSortDetails } from '../hooks/useSortDetails/useSortDetails';
import { useBreweries } from '../hooks/useBreweries/useBreweries';

export const MainContext = createContext();

export const ContextWrapper = ({children}) => {
    const poviderData = {
        sortDetails: useSortDetails(),
        breweries: useBreweries()
    };
    return (
        <MainContext.Provider value={poviderData}>
            {children}
        </MainContext.Provider>
    )
}
