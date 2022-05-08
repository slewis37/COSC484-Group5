import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import axios from 'axios';

function Searched(props) {	

	//if input is collected call SearchedRecipes()
	if (props.input != null){
		//alert("Searched component function called!");
		SearchedRecipes();
	}
	
function SearchedRecipes() {

	//alert("in child function of Searched, user's input = " +props.input)
	
		// create axios link
		const recipes = axios.create({
			baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
			params: {
				apiKey: 'e3d391f4a48d4cedbfca4de34646cfdb',
				input: props.input
				
			}
		});

		// get request to spoonacular api
		recipes.get().then(response => {
			console.log(response.data);
			var x = JSON.stringify(response);
			
		}).then((recipeList => {
			//recipeList.setRecipeData(recipes);
		}) );
		
	// Displays fetched JSON data to log to be!
	console.log("data = " + JSON.stringify(recipes));
	console.log("data structured = " + JSON.stringify(recipes, undefined, 2));

	return (
		
		<div key={recipes.id}>
	
			{	
				Object.entries({recipes}).map(data => {
				
					//return (

						<Search mapData={data => props.setRecipeData(data => props.recipeData)}>
						
						<Card key={data.id}>
							<img src={data.image} alt={data.title} />
							<h4>{data.title}</h4>
						</Card>
						</Search>
				//);	
				})
			}
		</div>
	);
} 

	return (
		<div>

		</div>

	);
}

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;




export default Searched;