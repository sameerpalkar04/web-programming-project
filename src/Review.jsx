import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css'

export default function Review() {
    return <div><Navbar/>
    <main className="container">
        <div className="form">
        
        </div>
        <div className="bg-image">
            <img id="bg" src='/Art.svg'></img>
            <h1 id='heading1'>WRITE A REVIEW</h1>
        </div>
    </main>
    <Footer/>
    </div>
}