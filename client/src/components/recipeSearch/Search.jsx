import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Searched from './Searched';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from ''


function Search() {                 
/*
    // Hooks for props 
    const [input, setInput] = useState('');
    const [recipeData, setRecipeData] = useState([]);
    const [details, setDetails] = useState([])
    
    let navigate = useNavigate();
/*
    const getRecipeList = axios.create({
        baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
        params: {
            apiKey: 'e3d391f4a48d4cedbfca4de34646cfdb',
            input: input
            
        }
    }); 

    // get request to spoonacular api
		getRecipeList.get().then(response => {
			console.log(response.data);
			//var x = JSON.stringify(response);
			return response.data;
			
		}); 

    // on submit of the form call Searched() passing input and recipeData 
    const submitHandler = (e) => {
        e.preventDefault();
       // Searched( {input: input}, {recipeData:recipeData, setRecipeData: setRecipeData} );
        setRecipeData(getRecipeList(e));
        setInput("");   
        //Searched({recipeData});
        navigate(`/searched/${input}`);
    };
    
    // set input 
    const changeHandler = (e) => {
        setInput(e.target.value)
    }

    */
    // if recipeData has content display recipe cards beneath search bar
    
        return (
            <div>
            
                    
                </div>
    
        
           
        );

        // else (recipeData is empty), only display search bar
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

export default Search;