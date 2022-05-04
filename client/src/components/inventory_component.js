/*\
 *
 *  View and manage food items in inventory
 * 
\*/

import React from 'react';

const Inventory = () => {
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

        export default Inventory;