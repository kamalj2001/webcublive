import React from 'react';
import {Switch,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import NoFound from './NoFound';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import TimeDate from './TimeDate';
const App = () => {
  return (
    <>
      <TimeDate />
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/" />
        </Switch>
        <Footer />
    </>
  )
}

export default App;
