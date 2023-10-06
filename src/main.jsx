import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './main.css'



import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCLtjutFeweSen3XPR2GUcFULk-odLCRPE",
  authDomain: "proyecto-react-633d8.firebaseapp.com",
  projectId: "proyecto-react-633d8",
  storageBucket: "proyecto-react-633d8.appspot.com",
  messagingSenderId: "406497602761",
  appId: "1:406497602761:web:4610f4b22c8fe217023118"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <App />
  </ChakraProvider>
)
