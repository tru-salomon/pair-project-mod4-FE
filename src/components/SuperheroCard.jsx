import PropTypes from 'prop-types';

const SuperheroCard = ({ superhero }) => {

    let dob = new Date(superhero.dob);
    let superDob = dob.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).split('/').reverse().join('-');

    return (
        <div className="superhero-card">
            <h2>{superhero.alias} </h2>
            <h2> {superhero.lastname}</h2>
            <p>Date of Birth: {superDob}</p>
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