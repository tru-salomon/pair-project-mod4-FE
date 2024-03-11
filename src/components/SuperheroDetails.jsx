import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SuperheroCard from './SuperheroCard'
import './SuperheroDetails.css'
import { API } from '../api.js'

const SuperheroDetails = () => {

    const [superhero, setSuperhero] = useState({});

    const { key } = useParams();

    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`${API}/ids/${key}`)
            .then((response) => {
                console.log('Hero deleted:', response.data);
                navigate(`/list`);
            })
            .catch((error) => console.error('Error deleting hero:', error));
    }

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
            <div className='buttons'>
                <Link to={`/superhero/${key}/edit`}><button className="edit-button">Edit</button></Link>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default SuperheroDetails