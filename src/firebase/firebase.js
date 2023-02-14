// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs8sg9c05ZDbFWLAU4bT2P9Y5ymOZEHTE",
    authDomain: "curso-react---guido-forcinito.firebaseapp.com",
    projectId: "curso-react---guido-forcinito",
    storageBucket: "curso-react---guido-forcinito.appspot.com",
    messagingSenderId: "342244925550",
    appId: "1:342244925550:web:539ffbb5240b84bfc7867f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar la BDD


// BDD - cargar la Base De Datos - función aplicada para cada producto.
export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}