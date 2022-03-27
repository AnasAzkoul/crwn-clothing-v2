import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import {
	createAuthUserWithEmailAndPassowrd,
	createUserProfileFromAuth
} from "../../Utils/firebase.utils"; 

import { SignUpContainer } from './sign-up-form.styles';


const defaultFormFields = {
	displayName: '', 
	email: '', 
	password: '', 
	confirmPassword: ''
}


const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields); 

	const { displayName, email, password, confirmPassword } = formFields; 

	const resetFormFields = () => {
		setFormFields(defaultFormFields); 
	}
	
	const handleChange = (event) => {
		const { name, value } = event.target; 
		setFormFields({...formFields, [name]: value})
	}

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passowrds do not match")
			return; 
		}

		try {
			const {user} = await createAuthUserWithEmailAndPassowrd(email, password)
			await createUserProfileFromAuth(user, { displayName }); 
			resetFormFields(); 
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('cannot create user, email already exists'); 
			} else {
				console.log(error.message)
			}
		}
	}

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>

				<FormInput
					label="Email"
					type='email'
					required
					name="email"
					value={email}
					onChange={handleChange}
				/>

				<FormInput
					label="Password"
					type='password'
					required
					name="password"
					value={password}
					onChange={handleChange}
				/>

				<FormInput
					label="Confirm Password"
					type='password'
					required
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>

				<Button  type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	)
}

export default SignUpForm; 