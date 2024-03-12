import { useState, useEffect } from 'react';
import axios from 'axios';
import '../formStyles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../api.js';



const EditHeroForm = () => {
    const [heroData, setHeroData] = useState(null);
    const { key } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API}/stats/${key}`)
            .then(response => {
                let dob = new Date(response.data.dob);
                let superDob = `${dob.getFullYear()}-${String(dob.getMonth() + 1).padStart(2, '0')}-${String(dob.getDate()).padStart(2, '0')}`;
                setHeroData({
                    ...response.data,
                    dob: superDob
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [key]);

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
        axios.put(`${API}/stats/${key}`, heroData)
            .then((response) => {
                console.log('Hero updated:', response.data);
                navigate(`/superhero/${key}`);
            })
            .catch((error) => console.error('Error updating hero:', error));
    };

    if (!heroData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <div className='form-wrapper'>
                <div className="form-container">
                    <h1>Edit Hero</h1>
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
                            <label className="check-label" htmlFor="adult">Adult</label>
                            <input
                                type="checkbox"
                                id="adult"
                                name="adult"
                                checked={heroData.adult}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditHeroForm;