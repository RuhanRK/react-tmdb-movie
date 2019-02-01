import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Pages/Header/Header";
import HomeContainer from "./containers/HomeContainer";
import MovieContainer from "./containers/MovieContainer";
import NotFound from "./components/Pages/NotFound/NotFound";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/movie/:movieId" component={MovieContainer} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
