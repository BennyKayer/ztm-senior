const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
    return fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            return {
                count: data.count,
                results: data.results,
            };
        });
};

const getPeople = async (fetch) => {
    const getRequest = await fetch("https://swapi.dev/api/people/");
    const data = await getRequest.json();
    // console.log(data);
    return {
        count: data.count,
        results: data.results,
    };
};

// getPeoplePromise(fetch);
getPeople(fetch);

module.exports = {
    getPeople,
    getPeoplePromise,
};
