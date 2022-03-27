import React from "react";
import { Fragment } from "react";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";


import { useContext } from "react";
import { userContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-dropdown.context"


import { Outlet } from "react-router-dom";

import { signOutUser } from "../../Utils/firebase.utils";


import { ReactComponent as CrwnLogo } from '../../asets/crown.svg'

// import styles 
import { NavigationContianer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";




const Navigation = () => {

	const { currentUser } = useContext(userContext); 
	const { isCartOpen, setIsCartOpen } = useContext(CartContext); 
	const handleToggle = () => setIsCartOpen(!isCartOpen); 

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
					<CartIcon onClick={handleToggle}/>		
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContianer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation