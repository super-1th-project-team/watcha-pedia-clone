// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBC6cCB5Yrnn8WMxpsjILaT6gUu4cbTIeo',
	authDomain: 'watcha-pedia-clone-app.firebaseapp.com',
	projectId: 'watcha-pedia-clone-app',
	storageBucket: 'watcha-pedia-clone-app.appspot.com',
	messagingSenderId: '427910770190',
	appId: '1:427910770190:web:138f0e466363532e63565f',
	databaseURL:
		'https://watcha-pedia-clone-app-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
