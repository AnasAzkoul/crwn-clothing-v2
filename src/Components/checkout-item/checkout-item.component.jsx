import React from "react";

// //context

import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart, addItemTocart, removeItemFromCart } from '../../Store/cart/cart.action'; 
import { selectCartItems } from "../../Store/cart/cart.selector";

// //styles 
import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow, 
	Value, 
	RemoveButton,
} from "./checkout-item.styles"; 


const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem; 

	const dispatch = useDispatch(); 
	const CartItems = useSelector(selectCartItems); 

	const clearItemHandler = () => dispatch(clearItemFromCart(CartItems, cartItem));
	const addItemHandler = () => dispatch(addItemTocart(CartItems, cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(CartItems, cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			
			<BaseSpan>{name}</BaseSpan>

			<Quantity>
				<Arrow onClick={removeItemHandler}>
					&#10094;
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>
					&#10095;
				</Arrow>
			</Quantity>

			<BaseSpan>{quantity * price}</BaseSpan>

			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem; 