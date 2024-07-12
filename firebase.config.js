import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyA9Kr4cWa_vxbL_C26pWx1Uc3vJi7MOL1g",
  authDomain: "otp-6128a.firebaseapp.com",
  projectId: "otp-6128a",
  storageBucket: "otp-6128a.appspot.com",
  messagingSenderId: "149790405726",
  appId: "1:149790405726:web:336e2c4bab9835c11630cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export { RecaptchaVerifier, signInWithPhoneNumber ,PhoneAuthProvider };