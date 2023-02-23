import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    //"AIzaSyAs8sg9c05ZDbFWLAU4bT2P9Y5ymOZEHTE",
    authDomain: "curso-react---guido-forcinito.firebaseapp.com",
    projectId: "curso-react---guido-forcinito",
    storageBucket: "curso-react---guido-forcinito.appspot.com",
    messagingSenderId: "342244925550",
    appId: "1:342244925550:web:539ffbb5240b84bfc7867f"
};

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

//Para poder consultar todos los productos de mi BD -  
export const getProductos = async() => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    console.log(producto.data())
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos", id))
}

//Generación de orden Compra

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}