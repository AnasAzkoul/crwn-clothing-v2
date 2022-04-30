import React, { useEffect } from "react";
// //router
import { Routes, Route } from 'react-router-dom';
// //components 
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
// //redux 
import { useDispatch } from "react-redux";
import {fetchCategoriesStart} from '../../Store/categories/categories.action.js'


const Shop = () => {

	const dispatch = useDispatch(); 

	useEffect(() => {
		dispatch(fetchCategoriesStart()); 
	}, [])

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
