import Navbar from './Components/Navbar'
import './App.css'
import Footer from "./Components/Footer"

export default function About() {
    return <div><Navbar/>
    <main className="container">
        <div className="content">
            <p>Welcome to YumYard, the ultimate destination for food enthusiasts and culinary adventurers alike! Dive into a vibrant world where flavors dance, and every bite tells a story.</p>
            <p>So come on in and explore YumYard. Whether you're looking to whip up a quick weeknight dinner, impress guests with a gourmet feast, or simply satisfy a midnight craving</p>
        </div>
        <div className="bg-image">
            <img id="bg" src='/Art.svg'></img>
            <h1 id='heading'>ABOUT</h1>
        </div>
    </main>
    <Footer/>
    </div>
}