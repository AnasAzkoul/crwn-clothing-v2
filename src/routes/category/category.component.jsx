import React from "react";
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Components/product-card/product-card.component';

import { categoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(categoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<Title>{category.toUpperCase()}</Title>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</Fragment>
	);
};

export default Category;