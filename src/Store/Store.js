import { compose, createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger'; 
import { rootReducer } from './Root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
///////////////////////////////////////////////////////////////


const middleWares = [
	process.env.NODE_ENV === 'development' && logger,
	thunk,
 ].filter(Boolean);

const composeEnhancer = (
	process.env.NODE_ENV !== 'production' 
	&& window 
	&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose; 

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); 


const persistConfig = {
	key: 'root', 
	storage, 
	whitelist: ['user'], 
}; 

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers); 

export const persistor = persistStore(store); 




