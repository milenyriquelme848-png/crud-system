
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCudzH4XkWHUnzyA7-K0Mb_Z1RNtPy9QCc",
    authDomain: "mileny-project.firebaseapp.com",
    projectId: "mileny-project",
    storageBucket: "mileny-project.firebasestorage.app",
    messagingSenderId: "707908644356",
    appId: "1:707908644356:web:2e8852851f5c943b764f51",
    measurementId: "G-JHD2X7M82L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  
export { db, analytics, app };

service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      allow read, write: if true;
    }
  }
}