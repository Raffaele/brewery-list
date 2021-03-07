import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, ListGroup, ListGroupItem } from 'reactstrap';
import {MainContext} from '../ContextWrapper';
import hooksService from '../hooksService';

import './BreweryDetails.scss';

export const BreweryDetails = () => {
    const {useContext} = hooksService.getReactHooks();
    const {useParams} = hooksService.getRouterHooks();
    const { breweries } = useContext(MainContext);
    const {breweryId} = useParams();
    const selectedBrewery = breweries.find(brewery => brewery.id === parseInt(breweryId));
    return (
        <div className="brewery-details">
            <Link to="/">
                <Button>HOME</Button>
            </Link>

            <fieldset>
                <legend className="brewery-details__name">{selectedBrewery?.name}</legend>
                <ListGroup>
                    <ListGroupItem>
                        Brewery type: <Badge color="primary" className="brewery-details__type">{selectedBrewery?.brewery_type}</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        City: <Badge color="primary" className="brewery-details__city">{selectedBrewery?.city}</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        Country: <Badge color="primary" className="brewery-details__country">{selectedBrewery?.country}</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        State: <Badge color="primary" className="brewery-details__state">{selectedBrewery?.state}</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a href={selectedBrewery?.website_url} className="brewery-details__web-link">WEB SITE</a>
                    </ListGroupItem>
                </ListGroup>
            </fieldset>
            
        </div>
    )
}