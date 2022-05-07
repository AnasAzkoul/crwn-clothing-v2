import React from "react";
import { useState } from "react";

// Components 
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

// Firebase, action creators, redux 
import { googleSignInStart, emailSinInStart } from "../../Store/User/user.action";
import { useDispatch } from "react-redux";

// styled components 
import { SignInContainer, ButtonWrap} from "./sign-in-form.styles"; 




const defaultSignInFields = {
	email: '', 
	password: ''
}

const SignInForm = () => {
	const dispatch = useDispatch(); 
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
		dispatch(googleSignInStart())
		
	}

	const handleSubmit = async (event) => {
		event.preventDefault(); 

		try {
			dispatch(emailSinInStart(email, password)); 
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
		<SignInContainer>
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

				<ButtonWrap>
					<Button
						type="submit"
					>SiGN IN
					</Button>

					<Button
						type="button"
						onClick={logGoogleUser}
						buttonType={BUTTON_TYPE_CLASSES.google}
					>Sign in with Google
					</Button>
				</ButtonWrap>
			</form>
		</SignInContainer>
	)
}

export default SignInForm; 