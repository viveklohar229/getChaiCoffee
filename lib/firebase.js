// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // ✅ Check for required env vars
// if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
//   console.warn("⚠️ Missing Firebase API Key in .env");
// }

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// // ✅ Properly initialize everything
// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();

// // ✅ Export everything cleanly
// export { firebaseApp, auth, googleProvider };

