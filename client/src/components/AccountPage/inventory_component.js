/*\
 *
 *  View and manage food items in inventory
 * 
\*/

import React, { useState } from 'react';
//testing data
import data from "./data.json";
//components
import IngreList from "./IngreList.js";
import RequestIngre from './RequestIngre.js';
import Generate from './Generate.js';
import './AccountPage.css';
import RecipeSearch from '../recipeSearch_component';

const Inventory = () => {

    const [ingreList, setIngreList] = useState(data);

    const handleToggle = (id) => {
        let mapped = ingreList.map(task => {
            return task.id === Number(id) ? {...task, complete: !task.complete } : {...task };
        });
        setIngreList(mapped);
    }

    const handleFilter = () => {
            let filtered = ingreList.filter(task => {
                return !task.complete;
            });
            setIngreList(filtered);
        }
        //adds ingredaisnts to a list 
        //this is where the code gets submitted to the database
    const addIngrediant = (userInput) => {
            let copy = [...ingreList];
            copy = [...copy, { id: ingreList.length + 1, task: userInput, complete: false }];
            setIngreList(copy);
        }
        //will handle switching to next page to generate receipes
    //const findReceipes = () => {

        //}
    //const RecipeSearch = (ingreList) => {

   // }
        //need to add another list for allergies
    return ( 
        <div className = "App">
        <header class = "page-header">
        <h1> Welcome To Your Account! </h1>
        </header>

        <main className = 'list-label'>
        <p> <b> <em> Pantry List: </em>  </b> </p> </main> 
        <IngreList ingreList = { ingreList }
        handleToggle = { handleToggle }
        handleFilter = { handleFilter }/> 
        <RequestIngre addIngrediant = { addIngrediant }/>
        <Generate RecipeSearch = { RecipeSearch }/> 
        </div>
    );
}
export default Inventory;