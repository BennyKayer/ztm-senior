import React, { Component } from "react";

import CardList from "../components/CardList/CardList.js";
import SearchBox from "../components/SearchBox/SearchBox.js";
import Scroll from "../components/Scroll/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header/Header.js";

import "./MainPage.css";

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = (robots) => {
        return robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;

        return (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? (
                        <h1>Loading</h1>
                    ) : (
                        <ErrorBoundry>
                            <CardList robots={this.filteredRobots} />
                        </ErrorBoundry>
                    )}
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
