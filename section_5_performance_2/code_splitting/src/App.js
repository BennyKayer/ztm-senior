import React, { lazy, useState, Suspense } from "react";
import "./App.css";

const Page1 = lazy(() => import("./componenets/Page1"));
const Page2 = lazy(() => import("./componenets/Page2"));
const Page3 = lazy(() => import("./componenets/Page3"));

const App = () => {
    const [route, setRoute] = useState("page1");

    const onRouteChange = (route) => {
        setRoute(route);
    };

    // Error boundary around that would be nice
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            {route === "page1" ? (
                <Page1 onRouteChange={onRouteChange} />
            ) : route === "page2" ? (
                <Page2 onRouteChange={onRouteChange} />
            ) : route === "page3" ? (
                <Page3 onRouteChange={onRouteChange} />
            ) : null}
        </Suspense>
    );
};

export default App;

// Code from videos - old ways etc
// import React, { Component } from "react";
// import "./App.css";

// import Page1 from "./componenets/Page1";

// import AsyncComponent from "./componenets/AsyncComponent";

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             route: "page1",
//             component: null,
//         };
//     }

//     onRouteChange = (route) => {
//         // No code splitting version / AsyncComponent code splitting
//         this.setState({ route: route });
//         // Code for splitting with component in state
//         // if (route === "page1") {
//         //     this.setState({ route: route });
//         // } else if (route === "page2") {
//         //     // inline import should work as code splitting bcs
//         //     // of how app has been set up with CRA
//         //     // then they supposedly added it to JS
//         //     // no now it works even outside of this CRA set up
//         //     import("./componenets/Page2").then((Page2) => {
//         //         this.setState({ route: route, component: Page2.default });
//         //     });
//         // } else if (route === "page3") {
//         //     import("./componenets/Page3").then((Page3) => {
//         //         this.setState({ route: route, component: Page3.default });
//         //     });
//         // }
//     };

//     render() {
//         //Code splitting with AsyncComponent
//         // It just replaced Page2 with AsyncPage2
//         // compared to no code splitting
//         if (this.state.route === "page1") {
//             return <Page1 onRouteChange={this.onRouteChange} />;
//         } else if (this.state.route === "page2") {
//             const AsyncPage2 = AsyncComponent(() =>
//                 import("./componenets/Page2"),
//             );
//             return <AsyncPage2 onRouteChange={this.onRouteChange} />;
//         } else if (this.state.route === "page3") {
//             const AsyncPage3 = AsyncComponent(() =>
//                 import("./componenets/Page3"),
//             );
//             return <AsyncPage3 onRouteChange={this.onRouteChange} />;
//         }

//         // Code splitting with component in state
//         // if (this.state.route === "page1") {
//         //     return <Page1 onRouteChange={this.onRouteChange} />;
//         // } else {
//         //     return <this.state.component onRouteChange={this.onRouteChange} />;
//         // }
//     }
// }

// export default App;
