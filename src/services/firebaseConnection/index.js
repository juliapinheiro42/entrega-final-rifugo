import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAzZdOu1INaXhpdycpuv-mYUbzXdNMbQbw",
    authDomain: "fir-app-cf800.firebaseapp.com",
    projectId: "fir-app-cf800",
    storageBucket: "fir-app-cf800.appspot.com",
    messagingSenderId: "408588124458",
    appId: "1:408588124458:web:9226d88235b59fc43dde53"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);