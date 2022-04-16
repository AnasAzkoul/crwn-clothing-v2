import React from "react";
// //components 
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
// //redux
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../Store/cart/cart.selector";

// //router 
import { Link } from "react-router-dom";
// //styles
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles"; 

const Checkout = () => {
	const cartItems = useSelector(selectCartItems); 
	const cartTotal = useSelector(selectCartTotal); 

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
							/>	
						)
					})
			}
			{
				cartTotal ? <Total>Total: {cartTotal}</Total>
					: <span>No item Selected, go to
						<Link to='/shop'> Shop</Link>
					</span>
			}
			
		</CheckoutContainer>
	)
}


export default Checkout; 
