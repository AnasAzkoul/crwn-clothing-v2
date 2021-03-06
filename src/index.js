import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Stripe
import { Elements } from '@stripe/react-stripe-js';

// router
import { BrowserRouter } from 'react-router-dom';
import { stripePromise } from './Utils/stripe/stripe.utils'; 
// redux 
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Store/Store';

// styles
import './index.scss'


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</BrowserRouter>
			</PersistGate>	
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'));

