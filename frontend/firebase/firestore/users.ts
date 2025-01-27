import { db } from "../firebase.ts";
import { query, where, getDocs, collection, doc, getDoc, setDoc } from "firebase/firestore";

export const addUser = async (userId: string, name: string) => {
    const result = await setDoc(doc(db, "users", userId), {
        name: "some name"
    });
}