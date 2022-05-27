import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, description, min_quantity, available_quantity, price} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Minimum Order Quantity: {min_quantity}</small></p>
                <p><small>Available Quantity: {available_quantity}</small></p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions">
                    <Link to="/purchase" className="btn btn-primary uppercase">purchase now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;