import { createAction } from "../../Utils/Reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from './categories.types'; 
import { getCategoriesAndDocuments } from '../../Utils/firebase.utils'; 


export const fetchCategoriesStart = () => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START); 

export const fetchCategoriesSuccess = (categoriesArray) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray ); 

export const fetchCategoriesFailed = (error) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error); 

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart()); 
	try {
		const categoriesArray = await getCategoriesAndDocuments('categories'); 
		dispatch(fetchCategoriesSuccess(categoriesArray)); 
	} catch (error) {
		dispatch(fetchCategoriesFailed(error)); 
	}
	
}