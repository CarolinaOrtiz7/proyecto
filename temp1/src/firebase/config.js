
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDILEIpMCEjyZ-9FyURJqhamoxLzDzGmgI",
  authDomain: "react-76d10.firebaseapp.com",
  projectId: "react-76d10",
  storageBucket: "react-76d10.appspot.com",
  messagingSenderId: "844886012270",
  appId: "1:844886012270:web:cb5bea6ba5960235b1117f"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){

return app
}