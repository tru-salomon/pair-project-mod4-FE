import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SuperheroCard from './SuperheroCard'

const API = import.meta.env.VITE_APP_API_URL;

const SuperheroDetails = ({ }) => {

    const [superhero, setSuperhero] = useState([]);

    const { key } = useParams();

    useEffect(() => {
        axios
            .get(`${API}/ids/${key}`)
            .then(response => {
                setSuperhero(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='superhero-details'>
            <SuperheroCard superhero={superhero} />
            <Link to={`/superhero/${key}/edit`}><button className="edit-button">Edit</button></Link>
        </div>
    )
}

export default SuperheroDetails