import React from 'react';
import ToSave from './ToSave.js';
import axios from 'axios';

//here called the ingrlist using the unique ID from Db
//param of user// body is user.data
//userID




const IngreList = ({ ingreList, handleToggle, handleFilter }) => {
    return (

        <div class = "text-center"> {
            ingreList.map(ingre => {
                return ( <
                    ToSave ingre = { ingre }
                    handleToggle = { handleToggle }
                    handleFilter = { handleFilter }
                    />
                )
            })
        } <button style = {
            {
                margin: '20px'
            }
        }

        //on click send post request with axios to the DB
        onClick = { handleFilter } > Clear Pantry < /button> 


        <
        /
        div >

    );
};

export default IngreList;
//this clear the striked out ingrreaint that user no longer needs
//can and will delete mutiples
//butt refresh clear all strikes out if not deleted