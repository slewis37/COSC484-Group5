/*\
 *
 *  View and manage food items in inventory
 * 
\*/
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {updateUser }from '../../actions/users'
//components
import IngreList from "./IngreList.js";
import RequestIngre from './RequestIngre.js';
import Generate from './Generate.js';
import './AccountPage.css';
import RecipeSearch from '../recipeSearch/recipeSearch_component';



const Inventory = () => {
<<<<<<< Updated upstream
    const user = useSelector((state)=>state.users[0]);
    const [userData, setUserData] = useState({...user});
	const dispatch = useDispatch();
    const mylist = userData.inventory.map((ingre, id)=>{return {id:id, task:ingre, complete:false}})
=======
    const user = useSelector((state) => state.users[0]);
    const [userData, setUserData] = useState({...user });
    const dispatch = useDispatch();
    const mylist = userData.inventory.map((ingre, id) => { return { id: id, task: ingre, complete: false } })
    //const mylist = userData.inventory.map((ingre, id) => { dispatch({ id: id, task: ingre, complete: false }) })
   //const mylist = userData.inventory.map((ingre, id)=>{return {id:id, task:ingre, complete:false}})
>>>>>>> Stashed changes


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
            let filtered = ingreList.filter(task => {return !task.complete;});//this works
            //console.log(filtered);
            setIngreList([...filtered]);//this doesn't...
            //console.log(ingreList);
            setUserData({...userData, inventory: filtered.map(task => {return task.task})})//this doesn't...
            //console.log(userData);
            dispatch(updateUser(userData));//this works
        }
        //adds ingredaisnts to a list 
        //this is where the code gets submitted to the database
    const addIngrediant = (userInput) => {
<<<<<<< Updated upstream
            let copy = [...ingreList];
            copy = [...copy, { id: ingreList.length + 1, task: userInput, complete: false }];
            setIngreList(copy);
            setUserData({...userData, inventory: ingreList.map(task => {return task.task})})
            dispatch(updateUser(userData));
        }
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
=======
        let copy = [...ingreList];
        copy = [...copy, { id: ingreList.length + 1, task: userInput, complete: false }];
        setIngreList(copy);
        setUserData({...userData, inventory: ingreList.map(task => { return task.task }) })
        dispatch(updateUser(userData));
    }
    return ( <div className = "column">



        <div className = "App">
        <header class = "page-header">
        <h1> Welcome To Your Account! </h1> </header>

        <main className = 'list-label' >
        <p > <b > <em > Pantry List: </em>  </b> </p> </main>
        <IngreList ingreList = { ingreList }
        handleToggle = { handleToggle }
        handleFilter = { handleFilter }/>  
        <RequestIngre addIngrediant = { addIngrediant }/> 
        <Generate RecipeSearch = { RecipeSearch }/>  
        </div>
>>>>>>> Stashed changes
        </div>
    );
}
export default Inventory;