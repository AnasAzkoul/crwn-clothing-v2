import React, { useEffect } from "react";
// //router
import { Routes, Route } from 'react-router-dom';
// //components 
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
// //firebase 
import { getCategoriesAndDocuments } from "../../Utils/firebase.utils";
// //redux 
import { setCategories } from "../../Store/categories/categories.action";
import { useDispatch } from "react-redux";


const Shop = () => {

	const dispatch = useDispatch(); 

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments();
			dispatch(setCategories(categoriesArray));
		}

		getCategoriesMap();
	}, [])

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
