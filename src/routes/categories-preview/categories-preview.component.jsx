import React from "react";
import { useContext, Fragment } from "react";
import { categoriesContext } from "../../contexts/categories.context";


import CategoryPreview from "../../Components/category-preview/category-preview.component";


const CategoriesPreview = () => {
	const { categoriesMap } = useContext(categoriesContext)
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

