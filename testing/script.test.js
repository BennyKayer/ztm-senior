const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

it("silly test", () => {
    expect("hello").toBe("hello");
});

it("no matches test", () => {
    expect(googleSearch("jebać czkawki", dbMock)).toEqual([]);
});

it("is searching google", () => {
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});
