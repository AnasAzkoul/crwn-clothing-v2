import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
} from './product-card.styles';


const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product; 
	const { addItemTocart } = useContext(CartContext); 
	const addProductToCart = () => addItemTocart(product); 
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