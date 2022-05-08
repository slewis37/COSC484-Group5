import React from 'react';

function RecipeCard({
    id,
    title,
    image,
    imageType
}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
        </div>
    );
}

export default RecipeCard;