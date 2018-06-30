import React from "react";
import { Route } from "react-router-dom";
import logo from "../assets/images/logo.svg";

import Results from "../components/results/results-page";
import Nav from "../components/nav/nav";
import Landing from "../components/landing/landing-page";
import About from "../components/about/about-content";
import Itinerary from "../components/itinerary/itinerary";
import RouteDetails from "../components/route-details/route-details";
import Team from "../components/team/team";
import "./app.css";

const App = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Landing} />
    <Route path="/results" component={Results} />
    <Route path="/about" component={About} />
    <Route path="/itinerary" component={Itinerary} />
    <Route path="/route-details" component={RouteDetails} />
    <Route path="/team" component={Team} />
  </div>
);

export default App;
