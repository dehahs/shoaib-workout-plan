// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbWGfbZZ7EofpOW9dlPGPgHIGNRof0KtQ',
  authDomain: 'shoaib-workout.firebaseapp.com',
  projectId: 'shoaib-workout',
  storageBucket: 'shoaib-workout.firebasestorage.app',
  messagingSenderId: '356400191761',
  appId: '1:356400191761:web:8ba54ace267e9e9fbbd4b0',
  measurementId: 'G-Q5YXERM4LC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
