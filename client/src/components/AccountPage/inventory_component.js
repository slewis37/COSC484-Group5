/*\
 *
 *  View and manage food items in inventory
 * 
\*/

import React, { useState } from 'react';
//testing data
import data from "./data.json";
//components
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import Generate from './Generate';
import './AccountPage.css';


const Inventory = () => {

    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? {...task, complete: !task.complete } : {...task };
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
            let filtered = toDoList.filter(task => {
                return !task.complete;
            });
            setToDoList(filtered);
        }
        //adds ingredaisnts to a list 
        //this is where the code gets submitted to the database
    const addIngrediant = (userInput) => {
            let copy = [...toDoList];
            copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
            setToDoList(copy);
        }
        //will handle switching to next page to generate receipes
    const findReceipes = () => {

        }
        //need to add another list for allergies
    return ( <
        div className = "App" >
        <
        header class = "page-header" >
        <
        h1 > Welcome To Your Account! < /h1> < /
        header >

        <
        main className = 'list-label' >
        <
        p > < b > < em > Pantry List: < /em>  < /b > < /p > < /
        main > <
        ToDoList toDoList = { toDoList }
        handleToggle = { handleToggle }
        handleFilter = { handleFilter }
        /> <
        ToDoForm addIngrediant = { addIngrediant }
        /><
        Generate findReceipes = { findReceipes }
        /> < /
        div >
    );
}
export default Inventory;