import React, { useState } from "react";
import { Link } from "react-router-dom";


const Order = () => {

    const initalOrderValues = {name: "", dough: "", cheese: "", topping1: "", topping2: "", topping3: "", topping4: "", topping5: ""};
    const [order, setOrder] = useState(initalOrderValues);


    const handleChange = event => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(order);
        
    };



    return (
        <>
            <h1>Order</h1>
            <p>Place your order here!</p>

            <div>
                <form onSubmit={event => handleSubmit(event)}>
                    <div>
                        <label>Name:
                            <input value={order.name} name="name" placeholder="Name" onChange={event => handleChange(event)} />
                        </label>
                    </div>

                    <div>
                        <label> Select Your Dough:
                            <select value={order.dough} name="dough" onChange={event => handleChange(event)}>
                                <option value={null}>Select a dough</option>
                                <option value="Thick">Thick</option>
                                <option value="Regular">Regular</option>
                                <option value="Thin">Thin</option>
                                <option value="Gluten Free">Gluten Free</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label> Select Your Cheese:
                            <select value={order.cheese} name="cheese" onChange={event => handleChange(event)}>
                                <option value={null}>Select a cheese</option>
                                <option value="Regular">Regular</option>
                                <option value="Extra Cheese">Extra Cheese</option>
                                <option value="Vegan Cheese">Vegan Cheese</option>
                                <option value="No Cheese">No Cheese</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label> Select Your First Topping:
                            <select value={order.topping1} name="topping1" onChange={event => handleChange(event)}>
                                <option value={null}>Select a topping</option>
                                <option value="Pepperoni">Pepperoni</option>
                                <option value="Sausage">Sausage</option>
                                <option value="Bacon">Bacon</option>
                                <option value="No Meat">No Meat</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label> Select Your Second Topping:
                            <select value={order.topping2} name="topping2" onChange={event => handleChange(event)}>
                                <option value={null}>Select a topping</option>
                                <option value='Green Peppers'>Green Peppers</option>
                                <option value='Onions'>Onions</option>
                                <option value='Olives'>Olives</option>
                                <option value='No Veggies'>No Veggies</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label> Select Your Third Topping:
                            <select value={order.topping3} name="topping3" onChange={event => handleChange(event)}>
                                <option value={null}>Select a topping</option>
                                <option value='Pineapple'>Pineapple</option>
                                <option value='Tomatoes'>Tomatoes</option>
                                <option value='Spinach'>Spinach</option>
                                <option value='Jalapenos'>Jalapenos</option>
                                <option value='No Additional'>No Additional</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <button onSubmit={() => handleSubmit()}>Submit</button>
                    </div>
                </form>
            </div>

            <div>
                <h2>Order Corfimation</h2>
                <p>Pizza For {order.name}</p>
                <p>- {order.dough} </p>
                <p>- {order.cheese}</p>
                <p>Toppings: </p>
                <p>- {order.topping1}</p>
                <p>- {order.topping2}</p> 
                <p>- {order.topping3}</p>
            </div>

            <div>
                <Link to='/confirmation'>Confirm Order</Link>
            </div>
            
            <div>
                <Link to="/">Go Back</Link>
            </div>
        
        </>
    );
}

export default Order;
