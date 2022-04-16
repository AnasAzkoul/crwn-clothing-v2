import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../Utils/Reducer/reducer.utils";

// ----------------------------------------------------------------------------------------

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// ----------------------------------------------------------------------------------------

const addCartItem = (cartItems, productToAdd) => {
	// find if cart items contains product to add; 
	const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
	// if found increment quantity;
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem)
	}
	// return new array with modified cart items / new cart item 
	return [...cartItems, { ...productToAdd, quantity: 1 }];
}
// ----------------------------------------------------------------------------------------

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id);
	// check if quantity is equal to 1, remove item from cart 
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
	}
	// if it is not equal to one, return cart item with reduced quantity
	return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
		? { ...cartItem, quantity: cartItem.quantity - 1 }
		: cartItem)
}
// ----------------------------------------------------------------------------------------

const clearCartItem = (cartItems, cartItemToClear) =>
	cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id); 

export const addItemTocart = (cartItems, productToAdd) => {
	const newCartItems = (addCartItem(cartItems, productToAdd));
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = (clearCartItem(cartItems, cartItemToRemove));
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}