import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Pages/Header/Header";
import HomeContainer from "./containers/HomeContainer";
import MovieContainer from "./containers/MovieContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/:movieId" component={MovieContainer} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
