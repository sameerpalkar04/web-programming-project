import './Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <nav className='Card'>
            <div className='c-image'>
                <img src="/Burger.jpg"></img>
                <h3>{props.name}</h3>

            </div>
            <div className='c-text'>
                <button type='button' className='reviewsBtn'>Check Reviews </button>
            </div>
        </nav>
    )
}