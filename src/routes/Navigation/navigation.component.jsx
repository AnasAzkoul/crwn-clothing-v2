import React from "react";
import { Fragment } from "react";
// //components
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../asets/crown.svg'
// //context
import { selectIsCartOpen } from "../../Store/cart/cart.selector";

// //redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/User/user.selector";
// //Router 
import { Outlet } from "react-router-dom";
// //firebase
import { signOutUser } from "../../Utils/firebase.utils";
//// styles 
import {
	NavigationContianer,
	LogoContainer, 
	NavLinks, NavLink
} from "./navigation.styles";


const Navigation = () => {

	const currentUser = useSelector(selectCurrentUser)
	const isCartOpen = useSelector(selectIsCartOpen)


	return (
		<Fragment>
			<NavigationContianer>
				<LogoContainer to='/'>
					<CrwnLogo className="logo"/>
				</LogoContainer>
				<NavLinks>
					
					<NavLink to='/shop'>
						SHOP
					</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
						: (
							<NavLink to='/auth'>SIGN IN</NavLink>)
					}
					<CartIcon/>		
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContianer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation