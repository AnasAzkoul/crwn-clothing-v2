import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// //router
import { BrowserRouter } from 'react-router-dom';

// //redux 
import { Provider } from 'react-redux';
import { store } from './Store/Store';

// //styles
import './index.scss'


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
					<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'));

