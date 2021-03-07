import React from 'react';
import { shallow } from 'enzyme';
import { SortingTh } from './SortingTh';
import hooksService from '../hooksService';

describe('<SortingTh />', () => {
    let sortDetails;
    beforeEach(() => {
        sortDetails = {
            key: 'name',
            direction: 1,
            updateSortKey: jest.fn()
        };
        const reactHooks = {
            useContext: () => ({
                sortDetails
            })
        };
        jest.spyOn(hooksService, 'getReactHooks').mockReturnValue(reactHooks);
    });

    describe('static content' , () => {
        it('should contains the correct text and classes if not selected', () => {
            const shallowWrapper = shallow(<SortingTh sortKey="sort-key">internal text</SortingTh>);
            expect(shallowWrapper.find('th').text()).toBe('internal text');
            expect(shallowWrapper.find('th').props().className).toBe('sorting-th');
        });
    
        it('should contains the correct text and classes if selected but not reverse', () => {
            const shallowWrapper = shallow(<SortingTh sortKey="name">internal text</SortingTh>);
            expect(shallowWrapper.find('th').text()).toBe('internal text');
            expect(shallowWrapper.find('th').props().className).toContain('sorting-th--selected');
            expect(shallowWrapper.find('th').props().className).not.toContain('sorting-th--reverse');
        });
    
        it('should contains the correct text and classes if selected and reverse', () => {
            sortDetails.direction = -1;
            const shallowWrapper = shallow(<SortingTh sortKey="name">internal text</SortingTh>);
            expect(shallowWrapper.find('th').text()).toBe('internal text');
            expect(shallowWrapper.find('th').props().className).toContain('sorting-th--selected');
            expect(shallowWrapper.find('th').props().className).toContain('sorting-th--reverse');
        });
    });
    
    describe('on click', () => {
        it('should call the sortDetails.updateSortKey method', () => {
            const shallowWrapper = shallow(<SortingTh sortKey="description">internal text</SortingTh>);
            shallowWrapper.find('th').simulate('click');
            expect(sortDetails.updateSortKey).toHaveBeenCalledWith('description');
        });
    });
});