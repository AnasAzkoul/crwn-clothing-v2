import React from "react";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import { Link } from "react-router-dom";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles"; 

const Checkout = () => {
	const {
		cartItems,
		addItemTocart,
		removeItemFromCart,
		clearItemFromCart,
		total, 
		updateTotal, 
	} = useContext(CartContext); 


	useEffect(() => updateTotal());

	return (
		<CheckoutContainer>
			<h1>Checkout Page</h1>
			<CheckoutHeader>
				<HeaderBlock>
					<span>product</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Discribtion</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>price</span>
				</HeaderBlock>

				<div className="header-block">
					<span>Remove</span>
				</div>
			</CheckoutHeader>
				{
					cartItems.map((cartItem) => {
						const { id } = cartItem; 
						return (
							<CheckoutItem
								key={id}
								cartItem={cartItem}
								addItem={addItemTocart}
								removeItem={removeItemFromCart}
								clearItem={clearItemFromCart}
							/>	
						)
					})
			}
			{
				total ? <Total>Total: {total}</Total>
					: <span>No item Selected, go to
						<Link to='/shop'> Shop</Link>
					</span>
			}
			
		</CheckoutContainer>
	)
}


export default Checkout; 
