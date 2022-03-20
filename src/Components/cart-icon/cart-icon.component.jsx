import React from "react";

import { useContext } from "react";
import {CartContext} from "../../contexts/cart-dropdown.context"

import "./cart-icon.styles.scss"; 
import { ReactComponent as ShoppingIcon } from "../../asets/shopping-bag.svg"; 

const CartIcon = () => {
	const {isCartOpen, setIsCartOpen} = useContext(CartContext); 
	const handleToggle = () => setIsCartOpen(!isCartOpen); 
	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" onClick={handleToggle}/>
			<span className="item-count">0</span>
		</div>
	)
}

export default CartIcon; 