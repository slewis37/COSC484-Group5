import React, { useState } from 'react';
import axios from 'axios';
//handles the tod list entering an ingrediant list
const RequestIngre = ({ addIngrediant }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleIngrediant = (e) => {
        e.preventDefault();
        addIngrediant(userInput);
        setUserInput("");
    }
    return (



        <
        form onSubmit = { handleIngrediant } >
        <
        input value = { userInput }
        type = "text"
        onChange = { handleChange }
        placeholder = "Enter Ingredient..." / >
        <
        button > Add Ingredient < /button> 


        <
        /
        form >

        //add post request using axios to send the add ingredant to dB

    );
};

export default RequestIngre;