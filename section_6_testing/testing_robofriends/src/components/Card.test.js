import React from "react";
import { shallow, mount, render } from "enzyme";
import Card from "./Card";

// Shallow means only render card if there's <Header /> inside card IT WON'T BE RENDERED
// it("renders card compoent", () => {
//     expect(shallow(<Card />).length).toEqual(1);
// });

// Mount does full DOM rendering, use if your code uses querySelector and all that stuff
// also usefull with lifecycle methods

// Render renders child in between, it's something between shallow and mount
// doesn't need full dom only renders to static HTML

it("renders card component", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
