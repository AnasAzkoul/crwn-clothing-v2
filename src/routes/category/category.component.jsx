import React from "react";
import Spinner from '../../Components/spinner/spinner.component'
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Components/product-card/product-card.component';

import { CategoryContainer, Title } from './category.styles';

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../Store/categories/ctaegories.selector";


const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap); 
	const isLoading = useSelector(selectCategoriesIsLoading)
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<Title>{category.toUpperCase()}</Title>
			{
				isLoading ? 
				<Spinner /> 
				: 
				<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</CategoryContainer>
			}
			
		</Fragment>
	);
};

export default Category;