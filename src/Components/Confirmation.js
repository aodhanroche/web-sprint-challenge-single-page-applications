import React from "react";
import { Link } from "react-router-dom";


const Confirmation = () => {
    return (
        <>
            <h1>Confirmation</h1>
            <p>Thank you for your order!</p>
            <Link to="/">Come Again!</Link>
        </>
    );
}

export default Confirmation;