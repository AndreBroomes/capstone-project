import React from 'react'

export default function RecipeCard({ ticket }) {
    const { name, location, image, webpage } = ticket;
        
        return (
            <div className="recipe-card">
                <img
                    src={image}
                    alt={name}
                    className="card-image"
                />
                <div className="card-body">
                    <h3 className="meal-title">{name}</h3>
                    <span className="recipe-category">{location}
                    </span>
                    <br/><br/><br/>
                    <a 
                    href={webpage} 
                    target="_blank"
                    rel="noreferrer"
                    className="instructions-link">Tickets</a>
                </div>
            </div>
        )
    };