import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAr_gfJWkivkPXb861Yhi80XrFD8U5NdWg',
	authDomain: 'first-steps-with-firebase.firebaseapp.com',
	projectId: 'first-steps-with-firebase',
	storageBucket: 'first-steps-with-firebase.appspot.com',
	messagingSenderId: '1078866519570',
	appId: '1:1078866519570:web:98f25e58e5f12852be9acb'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Module
export const auth = getAuth(app);

// Firestore Module
const db = getFirestore(app);
export const usersCollectionReference = collection(db, 'users');

// Storage Module
export const storage = getStorage(app);
