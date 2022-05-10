import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from "./components/home_component.js";
import { Route, Routes, useLocation } from 'react-router-dom';
//import Inventory from "./components/AccountPage/inventory_component.js";

import Login from "./components/login.js";
//import Navbar from "./components/navbar_component.js";

import Inventory from "./components/AccountPage/inventory_component";
import Searched from "./components/recipeSearch/Searched";
//import Recipe from "./components/recipeSearch/Recipe";
import RecipeSearch from "./components/recipeSearch/recipeSearch_component.js";
import RecipeView from "./components/recipeView_component.js";
import Register from "./components/AccountRegistration/register_component.js";
import Footer from "./components/footer_component.js";
import RecipeCard from './components/recipeSearch/recipeCard.js';

function Pages() {
	const location = useLocation();
	return (
		
         <AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>

				<Route path="/" element={<Home />} />
                <Route path="/recipeSearch/searched/:search" element={<Searched />} />
                <Route path="/recipeSearch/recipeCard/:name" element={<RecipeCard />} />
                

                <Route path = "/register" element = { < Register / > }> </Route>   
                <Route path = "/login" element = { < Login / > }> </Route>   
                <Route path = "/recipeView" element = { < RecipeView / > }> </Route>   
                <Route path = "/recipeSearch" element = { < RecipeSearch / > }> </Route>  
                <Route path = "/inventory" element = { < Inventory /> }> </Route>  
            </Routes> 
                
        </AnimatePresence>
		
	);
}

export default Pages;