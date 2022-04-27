/*\
 *
 *  Find recipes
 * 
\*/

//import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const RecipeSearch = () => {
    return (
        <div className="App">
     <Search/>
  </div>
    );
}

//Pages Page
/*
function Pages() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
				<Route path="/recipe/:name" element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
}
*/
//CUISINE PAGE

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);

	let params = useParams();

	const getCuisine = async name => {
		const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`
		);

		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type]);

	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map(recipe => {
				return (
					<Card key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}

//MEH CODE
const CuisineGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const CuisineCard = styled.div`
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

// HOME CLASS

function Home() {
	return (
        <div></div>
        
	);
}

// RECIPE CLASS
function Recipe() {
	let params = useParams();

	const [details, setDetails] = useState();
	const [activeTab, setActiveTab] = useState('instructions');

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
			);
			const detailData = await data.json();
			setDetails(detailData);
			console.log(detailData);
		};
		fetchDetails();
	}, [params.name]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details?.title}</h2>
				<img src={details?.image} alt="" />
			</div>
			<Info>
				<Button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</Button>

				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
						<h3
							dangerouslySetInnerHTML={{ __html: details?.instructions }}
						></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details?.extendedIngredients.map(ingredient => {
							return <li key={ingredient.id}>{ingredient.original}</li>;
						})}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	h2 {
		margin-bottom: 2rem;
	}
	ul {
		margin-top: 2rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 10rem;
`;

// SEARCH

function Search() {
    
	const [input, setInput] = useState('');

	//let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		//navigate(`/searched/${input}`);
		console.log(e);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<div>
				
				<input
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	padding: 0 15rem;
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		position: relative;
		width: 100%;
	}
	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: white;
	}
`;

// SEARCHED CLASS

function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<Grid>
			{searchedRecipes.map(recipe => {
				return (
					<Link to={`/recipe/${recipe.id}`}>
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

export default RecipeSearch;