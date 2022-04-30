import React from "react";
import { Fragment } from "react";
import CategoryPreview from "../../Components/category-preview/category-preview.component";
import Spinner from '../../Components/spinner/spinner.component'; 

import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../Store/categories/ctaegories.selector";


const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap); 
	const isLoading = useSelector(selectCategoriesIsLoading); 
	return (
		<Fragment>
		  {isLoading ? (
			 <Spinner />
		  ) : (
			 Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
				  <CategoryPreview key={title} title={title} products={products} />
				);
			 })
		  )}
		</Fragment>
	 );
}

export default CategoriesPreview;

