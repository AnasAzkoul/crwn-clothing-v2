import React from "react";
import { Fragment } from "react";
// components
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../asets/crown.svg'
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../Store/User/user.selector";
import { signOutStart } from "../../Store/User/user.action";
import { selectIsCartOpen } from "../../Store/cart/cart.selector";
// Router 
import { Outlet } from "react-router-dom";
// styles 
import {
	NavigationContianer,
	LogoContainer, 
	NavLinks, NavLink
} from "./navigation.styles";


const Navigation = () => {
	const dispatch = useDispatch(); 
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen); 

	const signOutUser = () => dispatch(signOutStart()); 


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
							<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
						) : (
							<NavLink to='/auth'>SIGN IN</NavLink>
							)
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