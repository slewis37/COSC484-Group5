import React from 'react';

const Generate = ({ findReceipes }) => {

    //to handle the sumbit button to generate receipes
    //currently button does not do anything

    const handleSubmit = (e) => {
        e.preventDefault();
        //addTask(userInput);
        //setUserInput("");
    }

    return ( <
        form onSubmit = { handleSubmit } >


        <
        button > Generate Recipes Here < /button> 




        <
        / form >
    );

};

export default Generate;