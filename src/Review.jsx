import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

export default function Review() {

    const [formData, setFormData] = useState({
        restaurantName: '',
        name: '',
        email: '',
        rating: '',
        reviewText: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/addReview', formData);
            console.log('Review added:', response.data.message);
            // Clear form fields
            setFormData({
                restaurantName: '',
                name: '',
                email: '',
                rating: '',
                reviewText: ''
            });
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <main className="container">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group1">
                            <label htmlFor="restaurantName">Restaurant Name:</label>
                            <input 
                                type="text" 
                                id="restaurantName" 
                                name="restaurantName" 
                                value={formData.restaurantName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group3">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group4">
                            <label htmlFor="rating">Rating:</label>
                            <select 
                                id="rating" 
                                name="rating" 
                                value={formData.rating}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group5">
                            <label htmlFor="review">Review:</label>
                            <textarea 
                                id="review" 
                                name="reviewText" 
                                rows="4" 
                                value={formData.reviewText}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="bg-image">
                    <img id="bg" src='/Art.svg' alt="background"></img>
                    <h1 id='heading1'>WRITE A REVIEW</h1>
                </div>
            </main>
            <Footer />
        </div>
    );
}
