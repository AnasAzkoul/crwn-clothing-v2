// //router
import { Route, Routes } from "react-router-dom";
// //components
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// //redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./Store/User/user.action";


const App = () => {

	const dispatch = useDispatch(); 

	useEffect(() => {
		dispatch(checkUserSession())
	}, [])


	return (
		<Routes>
			<Route path='/' element={<Navigation/>}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path="checkout" element={<Checkout />}/>
			</Route>
			
		</Routes>
	);
};

export default App;