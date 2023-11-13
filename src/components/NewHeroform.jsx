// src/NewHeroForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import the shared styles
import '../formStyles.css'; // Import the form-specific styles

const NewHeroForm = () => {
    const [heroData, setHeroData] = useState({
        alias: '',
        lastname: '',
        dob: '',
        adult: true,
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
        // Use Axios to send a POST request to your Express backend to add the new hero to the database
        axios.post('http://your-backend-api-endpoint/add-superhero', heroData)
            .then((response) => {
                // Handle the response or navigation to another page if needed
                console.log('New hero added:', response.data);
            })
            .catch((error) => console.error('Error adding new hero:', error));
    };

    return (
        <div className="form-container">
            <h1>Add a New Hero</h1>
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
                <div>
                    <input
                        type="checkbox"
                        id="adult"
                        name="adult"
                        checked={heroData.adult}
                        onChange={handleChange}
                    />
                    <label htmlFor="adult">Adult</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewHeroForm;
