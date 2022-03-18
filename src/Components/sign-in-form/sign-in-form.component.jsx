import React from "react";
import { useState } from "react";
import { signInAuthUserWithEmailAndPassowrd } from "../../Utils/firebase.utils"; 
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss"; 
import {
	signInWithGooglePopup,
	createUserProfileFromAuth,
} from "../../Utils/firebase.utils";


const defaultSignInFields = {
	email: '', 
	password: ''
}

const SignInForm = () => {
	const [signInFields, setSigninFields] = useState(defaultSignInFields); 

	const { email, password } = signInFields; 

	const resetSignInFields = () => {
		setSigninFields(defaultSignInFields);
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setSigninFields({ ...signInFields, [name]: value })
	}

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserProfileFromAuth(user);
	}

	const handleSubmit = async (event) => {
		event.preventDefault(); 

		try {
			const response = await signInAuthUserWithEmailAndPassowrd (email, password); 
			console.log(response); 
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert("incorrect password for email")
					break;
				case "auth/user-not-found":
					alert("incorrect email");
					break; 
				default:
					console.log(error); 
			}
		}
		resetSignInFields(); 
	}


	return (
		<div className="sign-in-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					required
				/>

				<div className="button-wrap">
					<Button
						type="submit"
					>SiGN IN
					</Button>

					<Button
						type="button"
						onClick={logGoogleUser}
						buttonType="google"
					>Sign in with Google
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm; 