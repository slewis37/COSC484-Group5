import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';

import Home from "./components/home_component.js";
//import Inventory from "./components/AccountPage/inventory_component.js";

import Login from "./components/login.js";
import Navbar from "./components/navbar_component.js";

import Inventory from "./components/AccountPage/inventory_component";
import RecipeSearch from "./components/recipeSearch/recipeSearch_component.js";
import RecipeView from "./components/recipeView_component.js";
import Register from "./components/AccountRegistration/register_component.js";
import Footer from "./components/footer_component.js";

// import Support from "./components/support_component.js";
// import Cuisines from "./components/cuisines_component.js";
// import Drinks from "./components/drinks_component.js";

import { getUsers } from './actions/users'

function App() {
    /*\
     * THIS IS TEST CODE. WILL BE CHANGED
    \*/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    /*\
     * END TEST CODE
    \*/
    //const location = useLocation();
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
        <
        Router >
        <
        Navbar / > { /* <br/> */ } <
        Routes >
        <
        Route path = "/"
        exact element = { < Home / > } > < /Route>   <
        Route path = "/register"
        exact element = { < Register / > } > < /Route>   <
        Route path = "/login"
        exact element = { < Login / > } > < /Route>   <
        Route path = "/recipeView"
        exact element = { < RecipeView / > } > < /Route>   <
        Route path = "/recipeSearch"
        exact element = { < RecipeSearch / > } > < /Route>   <
        Route path = "/inventory"
        exact element = { < Inventory / > } > < /Route>  < /
        Routes > <
        Footer / >
        <
        /Router>
    );
}

export default App;