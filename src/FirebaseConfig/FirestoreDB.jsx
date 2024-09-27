import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { firebaseConfig } from "./init";

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const itemSortbreakfast = async () => {
  try {
    const refDataQuery = collection(db, "orderItems");
    const q = query(refDataQuery, where("category", "==", "breakfast"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  } catch (error) {}
};
export const itemSortLuch = async () => {
  try {
    const refDataQuery = collection(db, "orderItems");
    const q = query(refDataQuery, where("category", "==", "lunch"));
    const querySnapshot = await getDocs(q);

    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  } catch (error) {
    console.log(error);
  }
};
export const itemSortAdditional = async () => {
  try {
    const refDataQuery = collection(db, "orderItems");
    const q = query(refDataQuery, where("category", "==", "additional"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  } catch (error) {
    console.log(error);
  }
};
