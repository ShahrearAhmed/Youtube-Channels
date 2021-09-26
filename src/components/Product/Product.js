import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { name, image, author, subscribers, videos, date, price } = props.channleProduct;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="product-name">

                <h4>Name: {name} </h4>
                <p>Author: {author}</p>
                <p>Subscribers: {subscribers}</p>
                <p>Videos: {videos}</p>
                <p>Join Date: {date}</p>
                <p>Monthly Income:${price}</p>
                <button
                    onClick={() => props.handleAddToCart(props.channleProduct)}
                    className="btn-purchase">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;