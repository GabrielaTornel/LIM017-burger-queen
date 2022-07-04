
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs, where, query,} from 'firebase/firestore';
import { firebaseConfig } from './init';


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const itemSortbreakfast = async() => {
    try{
        const refDataQuery =  collection(db, "orderItems")
        const q = query(refDataQuery, where("category", "==", "breakfast"));
        const querySnapshot = await getDocs(q);
        /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
        
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id: doc.id})
        })
        return docs;
        /* console.log(docs) */
    }
    catch  (error){
        console.log(error)
    }
}
export const itemSortLuch = async() => {
    try{
        const refDataQuery =  collection(db, "orderItems")
        const q = query(refDataQuery, where("category", "==", "lunch"));
        const querySnapshot = await getDocs(q);
        /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
        
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id: doc.id})
        })
        return docs;
        /* console.log(docs) */
    }
    catch  (error){
        console.log(error)
    }
}
export const itemSortAdditional = async() => {
    try{
        const refDataQuery =  collection(db, "orderItems")
        const q = query(refDataQuery, where("category", "==", "additional"));
        const querySnapshot = await getDocs(q);
        /* const dataDB = querySnapshot.docs.map(doc => ({id: doc.id,...doc.data() })) */
        
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id: doc.id})
        })
        return docs;
        /* console.log(docs) */
    }
    catch  (error){
        console.log(error)
    }
}

/* export const collectionOrder = async (collectionOrder) => {
    try { 
        const docRef = await addDoc(collection(db, "order"), {
    name: "nameUser",
    orderItems: collectionOrder,
    date: new Date().toLocaleDateString('es'),
    hora: new Date().toLocaleTimeString('es'),
    
  });
  console.log('Document written with ID: ', docRef.id)
    }catch (error){
        console.log(error)
    }
} */
