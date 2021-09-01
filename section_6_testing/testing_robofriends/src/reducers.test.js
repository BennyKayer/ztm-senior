import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers.js";

describe("searchRobots", () => {
    const initialState = {
        searchField: "",
    };

    it("should return the initial state", () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
    });

    it("should handle CHANGE_SEARCHFIELD", () => {
        expect(
            reducers.searchRobots(initialState, {
                type: CHANGE_SEARCHFIELD,
                payload: "abc",
            }),
        ).toEqual({
            searchField: "abc",
        });
    });
});

describe("requestRobots", () => {
    const initialState = {
        robots: [],
        isPending: false,
    };

    it("should return the initial state", () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
    });

    it("should handle REQUEST_ROBOTS_PENDING", () => {
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_PENDING,
            }),
        ).toEqual({
            robots: [],
            isPending: true,
        });
    });

    it("should handle REQUEST_ROBOTS_SUCCESS", () => {
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: [
                    {
                        id: "123",
                        name: "test",
                        email: "test@gmail.com",
                    },
                ],
            }),
        ).toEqual({
            robots: [
                {
                    id: "123",
                    name: "test",
                    email: "test@gmail.com",
                },
            ],
            isPending: false,
        });
    });

    it("should handle REQUEST_ROBOTS_FAILED", () => {
        expect(
            reducers.requestRobots(initialState, {
                type: REQUEST_ROBOTS_FAILED,
                payload: "NOOOOOO!!!!",
            }),
        ).toEqual({
            error: "NOOOOOO!!!!",
            robots: [],
            isPending: false,
        });
    });
});
