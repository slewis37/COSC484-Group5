/*\
 *
 *  View a full recipe
 * 
\*/

import React, {useState} from 'react';
//import axios from 'axios';
//import fetchRecipes from 'components/recipeSearch_component'
//import RecipeSearch from './recipeSearch/recipeSearch_component';
import styled from 'styled-components';

const RecipeView = (recipes) => {

    //const [recipe, setRecipe] = useState({});
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [open, setOpen] = useState(false);

    const openPopup = async () => {
        //setError(false);
        //setLoading(true);
        setOpen(true);
     /*   try {

            // TODO #1: {id} below is not yet defined

          const recipeData = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
          );
          setRecipe(recipeData.data);
          //setLoading(false);
        } catch (err) {
          //setError(true);
          //setLoading(false);
          console.log("error");
        } */
      }; 

      // TODO #2: searchedRecipes is not defined

      // TODO #3: Link is not defined

    return (
        <Grid>
        <h1> in recipeSearch </h1>
			{searchedRecipes.map(recipe => {
				/*return (
					<Link to={`/recipe/${recipe.id}`}>
						<Card key={recipe.id}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Card>
					</Link>
				); */
			})}
		</Grid>
    );
}
// Recipe Card grid
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

// Recipe Card
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

export default RecipeView;