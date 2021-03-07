import React from 'react';
import { shallow } from 'enzyme';
import { BreweryDetails } from './BreweryDetails';
import hooksService from '../hooksService';


describe('<BreweryDetails />', () => {
    it('should contains the details of selected brewery', () => {
        const selectedBrewery = {
            id:12,
            name: 'my-brewery-name',
            brewery_type: 'my brewery type',
            city: 'brewery city',
            country: 'brewery country',
            state: 'brewery state',
            website_url: 'https://brewery.url.com'
        };
        const routerHooks = {
            useParams: () => ({
                breweryId: selectedBrewery.id
            })
        };
        const reactHooks = {
            useContext: () => ({
                breweries: [{id:1}, {id:3}, selectedBrewery, {id:23}]
            })
        };
        jest.spyOn(hooksService, 'getReactHooks').mockReturnValue(reactHooks);
        jest.spyOn(hooksService, 'getRouterHooks').mockReturnValue(routerHooks);
        
        const shallowWrapper = shallow(<BreweryDetails />);
        expect(shallowWrapper.find('.brewery-details__name').text()).toBe(selectedBrewery.name);
        expect(shallowWrapper.find('.brewery-details__type').prop('children')).toContain(selectedBrewery.brewery_type);
        expect(shallowWrapper.find('.brewery-details__city').prop('children')).toContain(selectedBrewery.city);
        expect(shallowWrapper.find('.brewery-details__country').prop('children')).toContain(selectedBrewery.country);
        expect(shallowWrapper.find('.brewery-details__state').prop('children')).toBe(selectedBrewery.state);
        expect(shallowWrapper.find('.brewery-details__web-link').prop('href')).toBe(selectedBrewery.website_url);
    });

});

