import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"

export default function Dashboard() {
    return <div><Navbar/>
    <main className="container">
        <div className="text">
            <h1>SAY YES</h1>
            <h3>TO YOUR FAVORITE MEALS</h3>
        </div>
        <div className="image">
            <img src="/3215.jpg"></img>
        </div>
    </main>
    <Footer/>
    </div>

}