import React from "react";
import { Fragment } from "react";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/categories/ctaegories.selector";


const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap); 
	return (
		<Fragment>
			{
				Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title]
					return (
						<CategoryPreview key={title} title={title} products={products} />
					)
				})
			}
		</Fragment>

	)
}

export default CategoriesPreview;

