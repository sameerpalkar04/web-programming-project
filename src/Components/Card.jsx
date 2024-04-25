import { set } from 'mongoose';
import './Card.css'
import axios from 'axios'
import ReviewPage from './ReviewPage';
import { useState } from 'react';

export default function Card(props) {

    const [visible, setVisible] = useState(false);
    const [reviews, setReviews] = useState([]);


    function handleClick() {

        console.log('Check Reviews for ' + props.name)
        axios.get('http://localhost:4000/getReviews/' + props.name)
            .then(response => {
                setVisible(true);
                console.log(response.data)
                setReviews(response.data)
            })
            .catch(error => {
                console.log('Error getting reviews')
            })
    }

    return (<>
            <nav className='Card'>
            <div className='c-image'>
                <img src="/Burger.jpg"></img>
                <h3>{props.name}</h3>

            </div>
            <div className='c-text'>
                <button type='button' className='reviewsBtn' onClick={handleClick}>Check Reviews </button>
            </div>
        </nav>
        {visible && <ReviewPage reviews={reviews} setVisible={setVisible}/>}
</>
    )
}