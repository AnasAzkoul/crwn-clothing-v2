import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../Store/cart/cart.selector";
import {setIsCartOpen} from '../../Store/cart/cart.action'

// // logo for shopping cart
import { ReactComponent as ShoppingIcon } from "../../asets/shopping-bag.svg"; 
//// styles
import { CartIconContainer, ItemCount } from "./cart-icon.styles"; 

const CartIcon = ({onClick}) => {
	const dispatch = useDispatch(); 

	const cartCount = useSelector(selectCartCount); 
	const isCartOpen = useSelector(selectIsCartOpen); 

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen)); 
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon; 