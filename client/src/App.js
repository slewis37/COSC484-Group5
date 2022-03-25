import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from "./components/home_component.js";
import Inventory from "./components/inventory_component.js";
import Login from "./components/login_component.js";
import Navbar from "./components/navbar_component.js";
import RecipeSearch from "./components/recipeSearch_component.js";
import RecipeView from "./components/recipeView_component.js";
import Register from "./components/register_component.js";

function App(){
  return (
      <>
        <Navbar/>
        <Home/>
        <Register/>
        <Login/>
        <RecipeView/>
        <RecipeSearch/>
        <Inventory/>
      </>
    // <Router>
    //   <Navbar />
    //   <br/>
    //   <Route path="/" component={Home} />
    //   <Route path="/register" component={Register} />
    //   <Route path="/login" exact component={Login} />
    //   <Route path="/recipeView" exact component={RecipeView} />
    //   <Route path="/recipeSearch" exact component={RecipeSearch} />
    //   <Route path="/inventory" exact component={Inventory} />
    // </Router>
  );
}

export default App;