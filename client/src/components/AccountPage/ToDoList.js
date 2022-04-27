import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (



        <
        div class = "text-center" > {



            toDoList.map(todo => {
                return ( <
                    ToDo todo = { todo }
                    handleToggle = { handleToggle }
                    handleFilter = { handleFilter }
                    />
                )
            })
        } <
        button style = {
            {
                margin: '20px'
            }
        }
        onClick = { handleFilter } > Clear Pantry < /button>  < /
        div >
    );
};

export default ToDoList;
//this clear the striked out ingrreaint that user no longer needs
//can and will delete mutiples
//butt refresh clear all strikes out if not deleted