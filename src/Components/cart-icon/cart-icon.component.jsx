import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";


import { ReactComponent as ShoppingIcon } from "../../asets/shopping-bag.svg"; 

// import styles
import { CartIconContainer, ItemCount } from "./cart-icon.styles"; 

const CartIcon = ({onClick}) => {
	const {cartCount} = useContext(CartContext)
	
	return (
		<CartIconContainer>
			<ShoppingIcon onClick={onClick}/>
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon; 