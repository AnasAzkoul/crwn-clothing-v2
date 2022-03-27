import React from "react";
import SignUpForm from "../../Components/sign-up-from/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from './authentication.styles'; 



const Authentication = () => {

	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	)
}

export default Authentication; 