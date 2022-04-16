import React from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { selectCartItems } from '../../Store/cart/cart.selector'
import { addItemTocart } from '../../Store/cart/cart.action'

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
} from './product-card.styles';


const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product; 
	const dispatch = useDispatch(); 
	const CartItems = useSelector(selectCartItems); 
	const addProductToCart = () => dispatch(addItemTocart(CartItems ,product)); 
	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to card
			</Button>
		</ProductCartContainer>
	)
}

export default ProductCard; 