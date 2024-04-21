import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='logo'>
                <img src="/YumYard.svg"></img>
            </div>
            <div className='buttons'>
                <button type='button' id='b1'>About</button>
                <button type='button' id='b2'>Restaurants</button>
                <button type='button' id='b3'>Review</button>
            </div>
        </nav>
    )
}