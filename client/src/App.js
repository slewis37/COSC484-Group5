import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './index.css';

import Home from "./components/home_component.js";
import Inventory from "./components/AccountPage/inventory_component.js";

import Login from "./components/login_component.js";
import Navbar from "./components/navbar_component.js";
import RecipeSearch from "./components/recipeSearch_component.js";
import RecipeView from "./components/recipeView_component.js";
import Register from "./components/register_component.js";
// import Support from "./components/support_component.js";
// import Cuisines from "./components/cuisines_component.js";
// import Drinks from "./components/drinks_component.js";



function App() {
    return (
        // <>
        //   <Navbar/>
        //   <Home/>
        //   <Register/>
        //   <Login/>
        //   <RecipeView/>
        //   <RecipeSearch/>
        //   <Inventory/>
        // </>
        <Router>
        <Navbar/> { /* <br/> */ } 
        <Routes >
        <Route path = "/" exact element = { < Home/> }> </Route> 
        <Route path = "/register" element = { < Register/> } > </Route> 
        <Route path = "/login" exact element = { < Login/> } > </Route> 
        <Route path = "/recipeView" exact element = { < RecipeView/> } > </Route> 
        <Route path = "/recipeSearch" exact element = { < RecipeSearch/> } > </Route> 
        <Route path = "/inventory" exact element = { < Inventory/> } > </Route> {
            /* <Route path="/support" exact element={<Support/>} ></Route>
                  <Route path="/cuisines" exact element={<Cuisines/>} ></Route>
                  <Route path="/drinks" exact element={<Drinks/>} ></Route> */
        } 
        </Routes> 
        </Router>
    );

}

export default App;