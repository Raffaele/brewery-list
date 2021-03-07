import React from 'react';
import './SortingTh.scss';
import { MainContext } from '../ContextWrapper';
import hooksService from '../hooksService';

export const SortingTh = (props) => {
    const { useContext } = hooksService.getReactHooks();
    const { sortDetails } = useContext(MainContext);
    const {
        key,
        direction,
        updateSortKey
    } = sortDetails;
    
    const {children, sortKey} = props;
    const isSelected = sortKey === key;
    const isReverse = direction === -1;
    const classes = [
        'sorting-th',
        isSelected && 'sorting-th--selected',
        isReverse && 'sorting-th--reverse'
    ].filter(x => x).join(' ');

    function setSortKey() {
        updateSortKey(sortKey);
    }
    return (
        <th className={classes} onClick={setSortKey}>
            {children}
        </th>
    )
}
