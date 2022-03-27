
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
	setDoc,
	collection, 
	writeBatch,
	query, 
	getDocs,
} from 'firebase/firestore'
 
// ________________________________________________________________________________________________
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

export const auth = getAuth(); 

export const db = getFirestore(); 

// ________________________________________________________________________________________________
// saving, getting products data from the data base; 

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db); 

	objectsToAdd.forEach(object => {
		const docRef = doc(collectionRef, object.title.toLowerCase()); 
		batch.set(docRef, object); 
	});

	await batch.commit(); 
	console.log('done'); 
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories'); 
	const q = query(collectionRef); 

	const querySnapshot = await getDocs(q); 
	const categoryMap = querySnapshot.docs.reduce((accu, docSnapshot) => {
		const { title, items } = docSnapshot.data(); 
		accu[title.toLowerCase()] = items; 
		return accu; 
	}, {})

	return categoryMap; 
}


// ________________________________________________________________________________________________
// Authentication, sign-in, sign-out, and saving user data to the database

// sign-in with Google; 
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 


// saving user data to the data base; 
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


// sign-up authentication 
export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
	if (!email || !password) return; 

	return await createUserWithEmailAndPassword(auth, email, password); 
}


// sign-in with email and passowrd; 

export const signInAuthUserWithEmailAndPassowrd = async (email, password) => {
	if (!email || !password) return; 

	return await signInWithEmailAndPassword(auth, email, password); 
}

// sign-out 

export const signOutUser = async () => await signOut(auth); 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 