import React from 'react';
//handles the strike out if item no longer needed
const ToSave = ({ ingre, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (

        <div class = "pntryHead"> 
        <header> 
        <h6> test </h6> 
        </header> 
        </div>,


        <div id = { ingre.id }



        key = { ingre.id + ingre.task }
        name = "ingre"
        value = { ingre.id }
        onClick = { handleClick }
        className = { ingre.complete ? "ingre strike" : "ingre" } > { ingre.task } 
        </div>
    );
};




export default ToSave;