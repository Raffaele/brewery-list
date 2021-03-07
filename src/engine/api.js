const SERVER_URL = 'https://api.openbrewerydb.org';

const api = {
    getBreweryList
};

export default api;

function getBreweryList() {
    const subList1 = getBreweryCall({page: 1, perPage: 50});
    const subList2 = getBreweryCall({page: 2, perPage: 50});
    return Promise.all([subList1, subList2])
        .then(([part1, part2]) => [...part1, ...part2]);
}

function getBreweryCall({page, perPage}) {
    const url = `${SERVER_URL}/breweries?per_page=${perPage}&page=${page}`;
    return fetch(url).then(response => response.json());
}
