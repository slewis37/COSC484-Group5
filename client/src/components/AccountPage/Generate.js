import React, { useState } from 'react';
import RecipeSearch from '../recipeSearch/recipeSearch_component';
import IngreList from './IngreList';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const Generate = () => {
    //function Generate() {
    const [data, setData] = useState('');

    const generateRecipe = () => {
        setData("apples,+flour,+sugar");
    }
    return (

        <
        div class = "genrec" >
        <
        form onClick = { RecipeSearch } >
        <
        Link to = "/recipeSearch" > Generate Recipes Here < /Link> < /
        form >

        <
        /div>
    );

};

/*
return (
    <div>
        <RecipeSearch generateRecipe={data}/>
        <div>
            <Button primary onClick={() => generateRecipe(), }>Generate Recipes</Button>
        </div>
    </div>
) */


//}



//to handle the sumbit button to generate recipes
//currently button does not do anything
/* const handleSubmit = (e) => {
     e.preventDefault();
     
     
 }
 return ( 
     <form >
     
         <Link to="/recipeSearch">Generate Recipes Here </Link>
       
     </form>
 ); */
/*return ( 
        <form onClick={<RecipeSearch/>}>
        <button> Generate Recipes Here </button> 
        </form>
    ); 
}; */

export default Generate;