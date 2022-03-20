import React from "react";
import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json"


export const productsContext = createContext({
	products: []
})

export const ProductProvider = ({children}) => {
	const [products, setProducts] = useState(SHOP_DATA); 
	const value = { products };
	
	// useEffect(() => { 
	// 	setProducts(SHOP_DATA); 
	// }, []); 

	return (
		<productsContext.Provider value={value}>{children}</productsContext.Provider>
	)
}