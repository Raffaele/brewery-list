import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const BreweryListItem = ({ brewery, index }) => {
    return (
        <tr key={brewery.id}>
            <td>{index+1}</td>
            <td>{brewery.name}</td>
            <td>{brewery.brewery_type}</td>
            <td>{brewery.city}</td>
            <td>
                <a href={brewery.website_url} target="_blank" rel="noreferrer">
                    <Button color="info">
                        WEB SITE
                    </Button>
                </a>
            </td>
            <td>
                <Link to={`/${brewery.id}`}>
                    <Button color="success">-&gt;</Button>
                </Link>
            </td>
        </tr>
    )
}
