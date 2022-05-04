/*\
 *
 *  View and manage food items in inventory
 * 
\*/
import axios from 'axios';

import React, { useState } from 'react';

//components
import IngreList from "./IngreList.js";
import RequestIngre from './RequestIngre.js';
import Generate from './Generate.js';
import './AccountPage.css';
import RecipeSearch from '../recipeSearch_component';



const Inventory = () => {


    const mylist = [{
        "id": 0,
        "task": "Tomatoes",
        "complete": false
    }];

    const res = "";



    const list = axios.create({
        baseURL: 'http://localhost:5000/users/',
        params: {
            ingreList: mylist,
            id: 1
        }
    })
    list.get().then(function(response) {
        res = response.status;
        const data = list.JSON();
        setIngreList(data);

    });

    const [ingreList, setIngreList] = useState(mylist);
    //mapping through id based in ingrediant list
    //we need this to be able to strike out each ingrediant
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
            axios.post("http://localhost:5000/users/", setIngreList(filtered))
        }
        //adds ingredaisnts to a list 
        //this is where the code gets submitted to the database
    const addIngrediant = (userInput) => {
            let copy = [...ingreList];
            copy = [...copy, { id: ingreList.length + 1, task: userInput, complete: false }];
            setIngreList(copy);
            list.post().then(function(response) {
                res = response.status;
                const data = list.JSON();
                setIngreList(data);

            });
            //axios.post("http://localhost:5000/users/", setIngreList(copy))
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