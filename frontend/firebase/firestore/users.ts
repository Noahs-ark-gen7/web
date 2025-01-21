import { db } from "../firebase.ts";
import { query, where, getDocs, collection, doc, getDoc } from "firebase/firestore";

export const getUserDoc = async (userId: string) => {
    const userDoc = doc(db, "users", userId);
    const resultDoc = await getDoc(userDoc);
    console.log(resultDoc)
    return resultDoc;
}