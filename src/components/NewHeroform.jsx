import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../formStyles.css';
import { API } from '../api';


const NewHeroForm = () => {
    const navigate = useNavigate();

    const [heroData, setHeroData] = useState({
        alias: '',
        lastname: '',
        dob: '',
        adult: false,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const updatedValue = type === 'checkbox' ? e.target.checked : value;

        setHeroData({
            ...heroData,
            [name]: updatedValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let dob = new Date(heroData.dob).toISOString();
        let dataToSend = {
            alias: heroData.alias,
            lastname: heroData.lastname,
            dob: dob,
            adult: heroData.adult ? true : false
        };
        axios.post(`${API}/stats`, dataToSend)
            .then((response) => {
                // console.log(response.data);
                navigate(`/superhero/${response.data.key}`);
            })
            .catch((error) => console.error('Error adding new hero:', error));
    };

    return (
        <div className='container'>
            <div className='form-wrapper'>
                <div className="form-container">
                    <h1>New Hero Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="alias">Alias:</label>
                            <input
                                type="text"
                                id="alias"
                                name="alias"
                                value={heroData.alias}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={heroData.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={heroData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='checkbox'>
                            <label className='check-label' htmlFor="adult">Adult</label>
                            <input
                                type="checkbox"
                                id="adult"
                                name="adult"
                                checked={heroData.adult}
                                onChange={handleChange}
                            />

                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewHeroForm;
