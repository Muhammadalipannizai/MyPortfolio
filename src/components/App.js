import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "../styles/styles.css";
import Navbar from "./nav/Navbar";
import Footer from "./Footer";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About"
import Error404 from "./Error404";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/about-me"><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="*"><Error404 /></Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
