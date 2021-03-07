import React from 'react';
import { shallow } from 'enzyme';
import { BreweryList } from './BreweryList';
import hooksService from '../hooksService';
import { BreweryListItem } from '../BreweryListItem/BreweryListItem';

describe('<BreweryList />', () => {
    let sortDetails;
    let breweries;
    beforeEach(() => {
        sortDetails = {
            key: 'name',
            direction: 1
        };
        breweries = [{
            id: 1,
            name: 'Fdsa',
            brewery_type: 'type A'
        }, {
            id: 8,
            name: 'Asdf',
            brewery_type: 'type B'
        }, {
            id: 15,
            name: 'Bbwe',
            brewery_type: 'type C'
        }];
        const reactHooks = {
            useContext: () => ({
                breweries,
                sortDetails
            })
        };
        jest.spyOn(hooksService, 'getReactHooks').mockReturnValue(reactHooks);
    });

    
    it('should contains 3 BreweryListItem as the number of breweries', () => {
        const wrapper = shallow(<BreweryList />);
        expect(wrapper.find(BreweryListItem).length).toBe(3);
    });

    describe('brewery order', () => {
        it('breweries should be sorted by name', () => {
            const wrapper = shallow(<BreweryList />);
            const breweryListItems = wrapper.find(BreweryListItem);
            
            expect(breweryListItems.get(0).key).toBe('8');
            expect(breweryListItems.get(1).key).toBe('15');
            expect(breweryListItems.get(2).key).toBe('1');
        });
    
        it('breweries should be sorted by name (reverse)', () => {
            sortDetails.direction = -1;
            const wrapper = shallow(<BreweryList />);
            const breweryListItems = wrapper.find(BreweryListItem);
            
            expect(breweryListItems.get(0).key).toBe('1');
            expect(breweryListItems.get(1).key).toBe('15');
            expect(breweryListItems.get(2).key).toBe('8');
        });
    
        it('breweries should be sorted by type ', () => {
            sortDetails.key = 'brewery_type';
            const wrapper = shallow(<BreweryList />);
            const breweryListItems = wrapper.find(BreweryListItem);
            
            expect(breweryListItems.get(0).key).toBe('1');
            expect(breweryListItems.get(1).key).toBe('8');
            expect(breweryListItems.get(2).key).toBe('15');
        });
    });
    
    describe('brewery content', () => {
        it('every BreweryListItem should contain the correct brewery details', () => {
            const breweryListItems = shallow(<BreweryList />)
                .find(BreweryListItem);

            expect(breweryListItems.get(0).props.brewery).toBe(breweries[1])
            expect(breweryListItems.get(1).props.brewery).toBe(breweries[2])
            expect(breweryListItems.get(2).props.brewery).toBe(breweries[0])
        });
    });
});