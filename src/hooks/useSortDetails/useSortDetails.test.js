import { useSortDetails } from './useSortDetails';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useSortDetails', () => {
    let hookResult;
    beforeEach(async () => {
        await act(async () => renderHook(() => {
            hookResult = useSortDetails();
        }));
    });

    it('should have the correct default values', () => {
        expect(hookResult.key).toBe('name');
        expect(hookResult.direction).toBe(1);
    });

    it('should change the key if user set a different one', async() => {
        await act(async () => hookResult.updateSortKey('description'));
        expect(hookResult.key).toBe('description');
        expect(hookResult.direction).toBe(1);
    });

    it('should revert direction if called with the key already selected', async () => {
        await act(async () => hookResult.updateSortKey('name'));
        expect(hookResult.key).toBe('name');
        expect(hookResult.direction).toBe(-1);
    });
});