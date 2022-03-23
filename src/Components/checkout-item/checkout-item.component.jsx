import React from "react";

import "./checkout-item.styles.scss"; 


const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, quantity, imageUrl, price } = cartItem; 

	const clearItemHandler = () => {
		clearItem(cartItem)
	}

	const incrementHandler = () => {
		addItem(cartItem); 
	}

	const decrementHandler = () => {
		removeItem(cartItem); 
	}

	return (
		<div className="checkout-item-container">
			<div className="image-container ">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			
			<span className="name">{name}</span>

			<span className="quantity">
				<div className="arrow" onClick={decrementHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={incrementHandler}>
					&#10095;
				</div>
			</span>

			<span className="price">{quantity * price}</span>

			<span onClick={clearItemHandler} className="remove-button">&#10005;</span>
		</div>
	)
}

export default CheckoutItem; 