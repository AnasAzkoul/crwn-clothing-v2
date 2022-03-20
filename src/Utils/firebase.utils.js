import { initializeApp } from 'firebase/app'; 
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword,
	signOut, 
	onAuthStateChanged
} from 'firebase/auth'
import { 
	getFirestore, 
	doc,
	getDoc, 
	setDoc
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCwddU85Pt7dtm7Trwdad-AZadPFMPdvHQ",
	authDomain: "crwn-clothing-db-b5030.firebaseapp.com",
	projectId: "crwn-clothing-db-b5030",
	storageBucket: "crwn-clothing-db-b5030.appspot.com",
	messagingSenderId: "77399941491",
	appId: "1:77399941491:web:11d09d381eade4f23aa506"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider(); 

googleProvider.setCustomParameters({
	prompt: 'select_account'
})

export const auth = getAuth(); 

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); 
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 


export const db = getFirestore(); 

export const createUserProfileFromAuth = async (
	userAuth,
	additionalInformation ={}
) => {
	if (!userAuth) return; 

	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; 
		const createdAt = new Date(); 

		try {
			await setDoc(userDocRef, {
				displayName, 
				email, 
				createdAt, 
				...additionalInformation
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userDocRef; 
}

export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
	if (!email || !password) return; 

	return await createUserWithEmailAndPassword(auth, email, password); 
}


export const signInAuthUserWithEmailAndPassowrd = async (email, password) => {
	if (!email || !password) return; 

	return await signInWithEmailAndPassword(auth, email, password); 
}

export const signOutUser = async () => await signOut(auth); 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


