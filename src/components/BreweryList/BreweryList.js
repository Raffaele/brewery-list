import React from 'react';
import { Table } from 'reactstrap';
import { SortingTh } from '../SortingTh/SortingTh';
import { BreweryListItem } from '../BreweryListItem/BreweryListItem';
import {MainContext} from '../ContextWrapper';
import hooksService from '../hooksService';

export const BreweryList = () => {
    const { useContext } = hooksService.getReactHooks();
    const {breweries, sortDetails} = useContext(MainContext);
    const {
        key,
        direction
    } = sortDetails;
    const sortedBreweries = breweries.slice().sort((p1, p2) => {
        const sortValue1 = p1[key];
        const sortValue2 = p2[key];
        if (sortValue1>sortValue2) {
            return direction;
        }
        if (sortValue1 < sortValue2) {
            return -direction;
        }
        return 0;
    })
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <SortingTh sortKey="name">Name</SortingTh>
                        <SortingTh sortKey="brewery_type">Type</SortingTh>
                        <SortingTh sortKey="city">City</SortingTh>
                        <th>Web site</th>
                        <th>details</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedBreweries.map((brewery, i) =><BreweryListItem brewery={brewery} index={i} key={brewery.id} />)}
                </tbody>
            </Table>
            
        </>
    )
}
