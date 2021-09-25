import React from 'react'

const Character = ({ family, fullName, imageUrl, title }) => {
    return (
        <div data-test='character-card' className="card-container">
            <img data-test='character-image' src={imageUrl} alt={fullName} />
            <div data-test='character-body' className="card-body">
                <h1 data-test='character-content'>{title} {fullName} of {family}</h1>
            </div>
        </div>
    );
};

export default Character;