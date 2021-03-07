import { useBreweries } from './useBreweries';
import { act, renderHook } from '@testing-library/react-hooks';

import api from '../../engine/api';
jest.mock('../../engine/api');

describe('useBreweries', () => {
    let result;
    const MOCKED_RESULT = [{id: 1}, {id: 2}, {id: 3}];
    beforeEach(async () => {
        api.getBreweryList.mockResolvedValue(MOCKED_RESULT);
        await act(async () => renderHook(() => {
            result = useBreweries()
        }));
    });

    it('should require info to api.getBreweryList', () => {
        expect(api.getBreweryList).toBeCalledWith();
    });
    it('should return empty array before than api.getBreweryList response', () => {
        expect(result).toEqual(MOCKED_RESULT);
    });

    
});