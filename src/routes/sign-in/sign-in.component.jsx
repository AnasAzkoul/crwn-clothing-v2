import React from "react";
import {
	signInWithGooglePopup,
	createUserProfileFromAuth,  
} from "../../Utils/firebase.utils";
import SignUpForm from "../../Components/sign-up-from/sign-up-form.component";


const SignIn = () => {
	
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup(); 
		const userDocRef = await createUserProfileFromAuth(user) 

	}

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in With Google</button>
			<SignUpForm />
		</div>
	)
}

export default SignIn; 