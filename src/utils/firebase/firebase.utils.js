import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzlj4v_JA7eUZhQ88etu78ZJCzhLFAPcM",
  authDomain: "qdev-11892.firebaseapp.com",
  projectId: "qdev-11892",
  storageBucket: "qdev-11892.appspot.com",
  messagingSenderId: "62476986495",
  appId: "1:62476986495:web:66f1c48d878a662bff774a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const writeDataToDocs = async (obj) => {
  try {
    const docRef = await addDoc(collection(db, "Customers forms"), obj);
    console.log("messeage sent with id : ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", Error(error));
  }
};
