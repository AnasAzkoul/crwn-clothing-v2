import React from "react";

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow, 
	Value, 
	RemoveButton,
} from "./checkout-item.styles"; 


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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			
			<BaseSpan>{name}</BaseSpan>

			<Quantity>
				<Arrow onClick={decrementHandler}>
					&#10094;
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={incrementHandler}>
					&#10095;
				</Arrow>
			</Quantity>

			<BaseSpan>{quantity * price}</BaseSpan>

			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem; 