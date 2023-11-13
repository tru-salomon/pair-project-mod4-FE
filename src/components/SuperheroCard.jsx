import React from 'react';

const SuperheroCard = ({ superhero }) => {
    return (
        <div className="superhero-card">
            <h2>{superhero.alias} </h2>
            <h2> {superhero.lastname}</h2>
            <p>Date of Birth: {superhero.dob}</p>
            <p>Adult: {superhero.adult ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default SuperheroCard;
