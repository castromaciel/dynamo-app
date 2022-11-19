import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFz-7Bv-I-g96f19KawhEwhwTts1bevxE",
  authDomain: "dynamo-radv.firebaseapp.com",
  projectId: "dynamo-radv",
  storageBucket: "dynamo-radv.appspot.com",
  messagingSenderId: "139910512109",
  appId: "1:139910512109:web:99504fdb0c83285affbbe4"
};

const app = initializeApp(firebaseConfig);

export default app;