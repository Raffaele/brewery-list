import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { BreweryListItem } from './BreweryListItem';

describe('<BreweryListItem />', () => {
    let brewery;
    let wrapper;
    beforeEach(() => {
        brewery = {
            id: 123,
            name: 'brewery-name',
            brewery_type: 'brewery-type',
            city: 'my favourite city',
            website_url: 'https://my-web-site.com'
        };
        wrapper = shallow(<BreweryListItem brewery={brewery} index={5} />);
    });

    
    it('should contain link for details', () => {
        expect(wrapper.find(Link).props().to).toBe(`/${brewery.id}`);
    });

    it('should contain the link to the website', () => {
        expect(wrapper.find('a').props().href).toBe(brewery.website_url);
    });

    it('should show the index', () => {
        const tdList = wrapper.find('td');
        expect(tdList.get(0).props.children).toBe(6);
    });

    it('should show the brewery name', () => {
        const tdList = wrapper.find('td');
        expect(tdList.get(1).props.children).toBe(brewery.name);
    });

    it('should show the brewery type', () => {
        const tdList = wrapper.find('td');
        expect(tdList.get(2).props.children).toBe(brewery.brewery_type);
    });

    it('should show the brewery city', () => {
        const tdList = wrapper.find('td');
        expect(tdList.get(3).props.children).toBe(brewery.city);
    });
});