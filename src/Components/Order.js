import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";


const Order = () => {

    const initalOrderValues = {name: "", size: "", cheese: "", pepperoni: false, sausage: false, bacon: false, greenPeppers: false, onions: false,  specialInstructions: ""};
    const [order, setOrder] = useState(initalOrderValues);


    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setOrder({ ...order, [name]: updatedInfo });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(order);
        
    };

    const formSchema = yup.object().shape({
        name: yup.string().min("Name must be two characters long"),
    });

    const [ errors, setErrors ] = useState({
        name: ""
    });
    
    useEffect(() => {
        formSchema.isValid(order).then(valid => {
            setErrors({
                ...errors,
                name: valid,
            });
        });
    }, [order]);



    return (
        <>
            <h1>Order</h1>
            <p>Place your order here!</p>

            <div>
                <form id="pizza-form" onSubmit={event => handleSubmit(event)}>
                    <div>
                        <label>Name:
                            <input type="text" name="name" placeholder="Name" onChange={event => handleChange(event)} id="name-input"/>
                        </label>
                    </div>

                    <div>
                        <label> Select Your Size:
                            <select value={order.size} name="size" onChange={event => handleChange(event)} id="size-dropdown">
                                <option value={null}>Select a Size</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Huge">Huge</option>
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
                        <label> Select Three Toppings:
                            <div>
                                <label>Pepperoni
                                    <input type="checkbox" name="pepperoni" checked={order.pepperoni} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label>Sausage
                                    <input type="checkbox" name="sausage" checked={order.sausage} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label>Bacon
                                    <input type="checkbox" name="bacon" checked={order.bacon} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label>Green Peppers
                                    <input type="checkbox" name="greenPeppers" checked={order.greenPeppers} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label>Onions
                                    <input type="checkbox" name="onions" checked={order.onions} onChange={handleChange}/>
                                </label>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label>Special Instructions:
                            <input type="text" name="specialInstructions" placeholder="Something" onChange={event => handleChange(event)} id="special-text" />
                        </label>
                    </div>

                    <div>
                        <button onSubmit={() => handleSubmit()}>Submit</button>
                    </div>
                </form>
            </div>

            <div>
                <h2>Order Confirmation</h2>
                <p>Pizza For {order.name}</p>
                <p>- {order.dough} </p>
                <p>- {order.cheese}</p>
                <p>Toppings: </p>
                <p>- {order.pepperoni}</p>
                <p>- {order.sausage}</p> 
                <p>- {order.bacon}</p>
                <p>- {order.greenPeppers}</p>
                <p>- {order.sausage}</p>
                <p>Special Instructions: {order.specialInstructions}</p>
            </div>

            <div>
                <Link to='/confirmation' id="order-button">Add To Order</Link>
            </div>
            
            <div>
                <Link to="/">Go Back</Link>
            </div>
        
        </>
    );
}

export default Order;
