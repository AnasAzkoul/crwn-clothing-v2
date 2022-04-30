import { createSelector } from 'reselect'; 

const selectCategoryReducer = (state) => state.categories;  

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
); 

export const selectCategoriesMap = createSelector(
	[selectCategories], 
	(categories) => categories.reduce((accu, category) => {
		const { title, items } = category;
		accu[title.toLowerCase()] = items;
		return accu;
	}, {})
); 

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer], 
	(categoriesSlice) => categoriesSlice.isLoading
);  	