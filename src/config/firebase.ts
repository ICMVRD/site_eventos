import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ_mCHvM6py0TmZq1Q4xKemF1igZt9T_I",
  authDomain: "site-3b278.firebaseapp.com",
  projectId: "site-3b278",
  storageBucket: "site-3b278.appspot.com",
  messagingSenderId: "84577094387",
  appId: "1:84577094387:web:784b082d5d345a3c2d0586",
  measurementId: "G-HVLG62D0RX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };