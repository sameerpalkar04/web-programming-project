import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return <div><Navbar/>
    <main className="container">
        <div className="text">
            <h1>SAY YES!</h1>
            <h3>TO YOUR FAVORITE MEALS</h3>
            <Link to={"/restaurants"}>
                <button type="button" id="b4"><img src="/Group 35883.png"/></button>
            </Link>
        </div>
        <div className="image">
            <img src="/3215.svg"></img>
        </div>
    </main>
    <Footer/>
    </div>

}