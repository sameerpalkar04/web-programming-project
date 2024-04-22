import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"
import Card from "./Components/Card"

export default function Restaurants() {
    return <div><Navbar/>
    <div className="card-container">
    <Card name="McDonalds"/>
    <Card name="Burger King"/>
    <Card name="Wendys"/>
    <Card name="Taco Bell"/>
    <Card name="KFC"/>
    <Card name="Dominos Pizza"/>
    </div>
    <Footer/>
    </div>
}