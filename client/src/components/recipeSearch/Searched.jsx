import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Search from './Search';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Searched() {
	const user = useSelector((state) => state.users[0]);
    const [userData, setUserData] = useState({...user });
	const ingreList = userData.inventory;
const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();
	const API_KEY = 'e3d391f4a48d4cedbfca4de34646cfdb';

	//Console.log("in searched()");
/*
	const getSearched = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
		console.log(" recipes.results = " +recipes.results)
	};
*/

const getSearched = async list => {
	/*const data = await fetch(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
	); */
	const data = await fetch(
		`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${list.reduce((acc,e)=>{return acc+e+','},'').slice(0,-1)}`
	);
	
	const recipes = await data.json();
	setSearchedRecipes(recipes.results);
	console.log(" recipes.results = " +recipes.results)
};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<Grid>
			{searchedRecipes.map(recipe => {
				return (
					<Link to={`/recipeSearch/recipeCard/${recipe.id}`}>
						<Card key={recipe.id}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Card>
					</Link>
				);
			})}
		</Grid>
	);
}
	 /*return (
		
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
} */

	//return (
	//	<div>

	//	</div>

	//);
//}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

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