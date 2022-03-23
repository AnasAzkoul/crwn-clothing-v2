import React from "react";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import { Link } from "react-router-dom";

import "./checkout.styles.scss"; 

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
		<div className="checkout-container">
			<h1>Checkout Page</h1>
			<div className="checkout-header">
				<div className="header-block">
					<span>product</span>
				</div>

				<div className="header-block">
					<span>Discribtion</span>
				</div>

				<div className="header-block">
					<span>Quantity</span>
				</div>

				<div className="header-block">
					<span>price</span>
				</div>

				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
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
				total ? <span className="total">Total: {total}</span>
					: <span>No item Selected, go to
						<Link to='/shop'> Shop</Link>
					</span>
			}
			
		</div>
	)
}


export default Checkout; 
