import api from './api';

describe('api', () => {
    const fetchResponse = [1,2,3];
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => fetchResponse
        });
    })
    afterEach(() => {
        global.fetch.mockClear();
    });
    it('should call fetch twice', () => {
        api.getBreweryList();
        expect(global.fetch.mock.calls.length).toBe(2);
    });

    it('should resolve with the 2 arrays concatenated', () => {
        expect(api.getBreweryList()).resolves.toEqual([...fetchResponse, ...fetchResponse]);
    });
});