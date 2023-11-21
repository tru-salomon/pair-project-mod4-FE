import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SuperheroCard from './SuperheroCard';
import axios from 'axios'


const API = import.meta.env.VITE_APP_API_URL;

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
            <h1>Superhero Profiles</h1>
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
