import {useEffect, useState} from 'react';
import api from '../../engine/api';

export function useBreweries() {
    const [breweries, setBreweries] = useState([]);
    useEffect(() => {
        api.getBreweryList().then(setBreweries);
    }, []);

    return breweries;
}