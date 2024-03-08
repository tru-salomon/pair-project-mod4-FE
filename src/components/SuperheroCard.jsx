import PropTypes from 'prop-types';

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

SuperheroCard.propTypes = {
    superhero: PropTypes.shape({
        alias: PropTypes.string,
        lastname: PropTypes.string,
        dob: PropTypes.string,
        adult: PropTypes.bool
    }).isRequired
};

export default SuperheroCard;