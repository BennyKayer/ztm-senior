import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList.js";

it("renders CardList component", () => {
    const mockRobots = [
        {
            id: 1,
            name: "John Snow",
            username: "JohnSnow",
            email: "john@gmail.com",
        },
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
