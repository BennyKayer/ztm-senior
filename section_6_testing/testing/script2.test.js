const fetch = require("node-fetch");
const swapi = require("./script2");

// These two take up a lot of time because of the need to wait for api to respond
// it("calls swapi to get people", (/*done*/) => {
//     expect.assertions(1);
//     return swapi.getPeople(fetch).then((data) => {
//         expect(data.count).toEqual(82);
//         // can instead just return
//         // done();
//     });
// });

// it("calls swapi to get people with a promise", () => {
//     expect.assertions(2);
//     return swapi.getPeoplePromise(fetch).then((data) => {
//         expect(data.count).toEqual(82);
//         expect(data.results.length).toBeGreaterThanOrEqual(10);
//     });
// });

// So that's the mock version
it("gets people returns count and results", () => {
    const mockFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    count: 82,
                    results: [0, 1, 2, 3, 4, 5],
                }),
        })
    );
    // Super important to add this in async tests
    expect.assertions(4);

    // Always return in async tests
    // you can also use done but this is easier
    // mock = spy bcs you can check out this .mock calls etc.
    return swapi.getPeoplePromise(mockFetch).then((data) => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people/");
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThanOrEqual(5);
    });
});
