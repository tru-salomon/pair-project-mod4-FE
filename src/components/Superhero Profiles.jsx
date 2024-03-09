import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SuperheroCard from './SuperheroCard';
import axios from 'axios'
import './Superhero Profiles.css';
import { API } from '../api.js'

const Superhero_Profiles = () => {
    const [superheroes, setSuperheroes] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/ids`)
            .then(response => {
                setSuperheroes(response.data)
            }
            )
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <h1 className='title'>Superhero Profiles</h1>
            <div className="superhero-list">
                {superheroes.map(superhero => (
                    <Link to={`/superhero/${superhero.key}`} key={superhero.key}>
                        <SuperheroCard key={superhero.key} superhero={superhero} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Superhero_Profiles
