import {useState} from 'react';

export function useSortDetails() {
    const [key, setKey] = useState('name');
    const [direction, setDirection] = useState(1);

    return {
        key,
        direction,
        updateSortKey
    };

    function updateSortKey(newKey) {
        if (newKey === key) {
            setDirection(direction => -direction);
            return;
        }

        setKey(newKey);
        setDirection(1);
    }
}