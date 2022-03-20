import React from "react";
import { Fragment } from "react";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";


import { useContext } from "react";
import { userContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-dropdown.context"


import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../Utils/firebase.utils";

import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../asets/crown.svg'




const Navigation = () => {

	const { currentUser } = useContext(userContext); 
	const { isCartOpen } = useContext(CartContext); 

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to='/'>
					<CrwnLogo className="logo"/>
				</Link>
				<div className="nav-links-container">
					
					<Link className="nav-link" to='/shop'>
						SHOP
					</Link>

					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>Sign Out</span>)
						: (
							<Link className="nav-link" to='/auth'>SIGN IN</Link>)
					}
					<CartIcon/>		
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation