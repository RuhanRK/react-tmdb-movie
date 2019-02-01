import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Pages/Header/Header";
import HomeContainer from "./containers/HomeContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" excat component={HomeContainer} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
