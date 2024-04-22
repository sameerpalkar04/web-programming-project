import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='logo'>
                <Link to={"/"}>
                    <img src="/YumYard.svg"></img>
                </Link>
            </div>
            <div className='buttons'>
                <Link to={"/restaurants"}>
                    <button type='button' id='b2'>Restaurants</button>
                </Link>
                <Link to={"/review"}>
                    <button type='button' id='b3'>Review</button>
                </Link>
                <Link to={"/about"}>
                    <button type='button' id='b1'>About</button>
                </Link>
            </div>
        </nav>
    )
}