import { takeLatest, call, all, put  } from 'redux-saga/effects'; 

import { getCategoriesAndDocuments } from '../../Utils/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(getCategoriesAndDocuments,'categories'); 
		yield put(fetchCategoriesSuccess(categoriesArray))  
	} catch (error) {
		yield put(fetchCategoriesFailed(error))
	}
}

export function* onFetchCategories() {
	yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync); 
}


// accumelator that holds all sagas related to the category; 

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
 }