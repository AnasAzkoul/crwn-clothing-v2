import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import "./cart-icon.styles.scss"; 
import { ReactComponent as ShoppingIcon } from "../../asets/shopping-bag.svg"; 

const CartIcon = ({onClick}) => {
	const {cartCount} = useContext(CartContext)
	
	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" onClick={onClick}/>
			<span className="item-count">{cartCount}</span>
		</div>
	)
}

export default CartIcon; 