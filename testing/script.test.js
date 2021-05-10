const googleSearch = require("./script");

dbMock = [
    "dog.com",
    "cheesepuff.com",
    "disney.com",
    "dogpictures.com",
    "dogo.com",
];

describe("googleSearch", () => {
    it("no matches test", () => {
        expect(googleSearch("jebać czkawki", dbMock)).toEqual([]);
    });

    it("is searching google", () => {
        expect(googleSearch("dog", dbMock)).toEqual([
            "dog.com",
            "dogpictures.com",
            "dogo.com",
        ]);
    });

    it("work with undefined and null input", () => {
        expect(googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch(undefined, dbMock)).toEqual([]);
    });

    it("does not return more than 3 matches", () => {
        expect(googleSearch("dog", dbMock).length).toEqual(3);
    });
});

it("silly test", () => {
    expect("hello").toBe("hello");
});
