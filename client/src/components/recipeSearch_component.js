/*\
 *
 *  Find recipes
 * 
\*/

//import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import RecipeView from './recipeView_component';
import styled from 'styled-components';
//import { motion } from 'framer-motion';
//import { Link, useParams } from 'react-router-dom';

const [resultRecipes, setResultRecipes] = useState();
const RecipeSearch = (IngreList) => {

	//console.log(JSON.stringify(IngreList, null, " "));
	const [resultRecipes, setResultRecipes] = useState();
	const ingredients = "apples,+flour,+sugar"
    //const [resultRecipes, setResultRecipes] = useState();
	const  res = "";
	//Fetch Recipe Code
	useEffect(() => {
		
	alert('In recipeSearch useEffect');
	//const fetchRecipes = async (e) => {  //Restore?!
		//e.preventDefault();  // Restore

	function fetchRecipes() {
		//setError(false);
		////setMessage('');
		//setLoading(true);
		//try {
		alert('in fetchRecipes useEffect');

		
		// NEED TO PASS IN PARAM HERE
		const recipes = axios.create({
			baseURL: 'https://api.spoonacular.com/recipes/findByIngredients',
			params: {
				ingredients: 'apples,+flour,+sugar',
				number: 10,
				apiKey: 'e3d391f4a48d4cedbfca4de34646cfdb'
			}
		});

		alert('made axios link 1');
		/*
		recipes.get().then(function (response) {
			res = response.status;
			alert('res= ' + res);
		}); 
		*/
		const resStatus = res.status;
		alert('res2 =' + resStatus);


		
		alert('made axios link');
		//const recipes = await axios.get(  // Compiler does not like 'await'
		
			
		//const recipeData = await recipes.json();
		const recipeData = recipes.json();
			setResultRecipes(recipeData); 
			//console.log(JSON.stringify(recipeData, null, " "));
			
	};  // Restore?
		alert('above call');
		//this.fetchRecipes();
		fetchRecipes();

		

		
}, [IngreList]);
return (

<div className="app">
	<h3 className="app">
	  {title}
	</h3>
<img
	className="app"
	src={image}
	alt={title}
  />
  </div>
	
 
		
		
		
	);
} // end recipesearch

// RECIPE CARD

// RECIPE LIST
const RecipesList = ({ faveRecipes, recipes, loading }) => {
	let faveRecipeItems;
	if (loading) {
	  faveRecipeItems = null;
	} else if (faveRecipes.length > 0) {
	  faveRecipeItems = (
		<Fragment>
		  {faveRecipes.map((recipe) => (
			<RecipeCard
			  key={recipe.id}
			  id={recipe.id}
			  title={recipe.title}
			  image={recipe.image}
			  missingIngredients={recipe.missedIngredients}
			/>
		  ))}
		</Fragment>
	  );
	}
}
	// RECIPE CONTENT FOR CARD
	const RecipeContent = ({ recipeData, missingIngredients }) => {
		const {
		  image,
		  title,
		  extendedIngredients,
		  analyzedInstructions,
		  sourceUrl,
		  creditsText,
		} = recipeData;
	}


//const RecipeCard = ({ id, title, image, missingIngredients = null }) => {

export default RecipeSearch;