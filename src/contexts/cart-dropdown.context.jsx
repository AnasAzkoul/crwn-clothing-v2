import React from "react";
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
	// find if cart items contains product to add; 
	const existingCartItem  = cartItems.find(cartItem => cartItem.id === productToAdd.id); 
	// if found increment quantity;
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 } 
				: cartItem )
	}
	// return new array with modified cart items / new cart item 
	return [...cartItems, { ...productToAdd, quantity: 1 }]; 
}

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id); 
	// check if quantity is equal to 1, remove item from cart 
	if (existingCartItem.quantity === 1 ) {
		return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id); 
	}
	// if it is not equal to one, return cart item with reduced quantity
	return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
		? { ...cartItem, quantity: cartItem.quantity - 1 }
		: cartItem)
}

const clearCartItem = (cartItems, cartItemToClear) =>
	cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id); 


const calcTotal = (cartItems) => {
	let total = 0; 
	const subTotals = cartItems.map(cartItem => cartItem.quantity * cartItem.price); 

	total = subTotals.reduce((accu, curr) => accu + curr, 0)

	return total
}

export const CartContext = createContext({
	isCartOpen: false, 
	setIsCartOpen: () => { }, 
	cartItems: [], 
	addItemToCart: () => { },
	removeItemFromCart: () => { }, 
	clearItemFromCart: () => { }, 
	cartCount: 0, 
	total: 0, 
	updateTotal: () => {}
}); 


export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false); 
	const [cartItems, setCartItems] = useState([]); 
	const [cartCount, setCartCount] = useState(0); 
	const [total, setTotal] = useState(0); 

	const addItemTocart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd)); 

	const removeItemFromCart = (cartItemToRemove) =>
		setCartItems(removeCartItem(cartItems, cartItemToRemove)); 
	
	const clearItemFromCart = (cartItemToRemove) =>
		setCartItems(clearCartItem(cartItems, cartItemToRemove)); 
	
	const updateTotal = () => setTotal(calcTotal(cartItems)); 
	
	useEffect(() => {
		const newCartItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); 
		setCartCount(newCartItems); 
	}, [cartItems]); 

		const value = {
			isCartOpen,
			setIsCartOpen,
			cartItems,
			addItemTocart,
			cartCount,
			removeItemFromCart,
			clearItemFromCart,
			total, 
			updateTotal,
		}
	
	
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	)
}