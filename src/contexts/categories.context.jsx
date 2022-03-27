import React from "react";
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../Utils/firebase.utils"


export const categoriesContext = createContext({
	categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
	const [categoriesMap, setCategoriesMap] = useState({}); 

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments(); 
			setCategoriesMap(categoryMap); 
		}

		getCategoriesMap(); 
	}, [])

	const value = { categoriesMap };
	
	// useEffect(() => { 
	// 	setProducts(SHOP_DATA); 
	// }, []); 

	return (
		<categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
	)
}