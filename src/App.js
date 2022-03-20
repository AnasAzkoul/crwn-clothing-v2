import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
// import CartIcon from "../../crwn-clothing-v2/src/Components/cart-icon/cart-icon.component";

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Navigation/>}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
			
		</Routes>
	);
};

export default App;