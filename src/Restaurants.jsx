import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"
import Card from "./Components/Card"

export default function Restaurants() {
    const restaurants = [
        { name: 'McDonalds' },
        { name: 'Burger King' },
        { name: 'Wendys' },
        { name: 'Taco Bell' },
        { name: 'KFC' },
        { name: 'Dominos Pizza' }
    ];


    return <div><Navbar/>
    <div className="card-container">
        {restaurants.map((restaurant, index) => (
            <Card key={index} name={restaurant.name} />
        ))}
    </div>
    <Footer/>
    </div>
}