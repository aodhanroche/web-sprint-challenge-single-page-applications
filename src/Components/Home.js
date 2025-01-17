import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className="Header">
                <h1>Home</h1>
                <p>Welcome to My site!</p>
            </div>

            <div className="Image">
                <img src="/Images/Pizza.jpg" alt="pizza" width="600" height="350"/>
            </div>

            <div className="Button">
                <Link to="/pizza" id="order-pizza">Order Now!</Link>
            </div>
        </>
    );
};

export default Home;