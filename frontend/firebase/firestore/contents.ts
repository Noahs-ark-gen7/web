import { db } from "../firebase.ts";
import { query, where, getDocs, collection, doc, setDoc } from "firebase/firestore";

export const getContentByUser = async (userId: string) => {
    const q = query(collection(db, "contents"), where("uid", "==", doc(db, "users", userId)));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs.length)
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

export const addContent = async (userId: string, content: string) => {
    const result = await setDoc(doc(db, "contents", userId), {
        uid: doc(db, "users", userId),
        content: content
    });

    console.log(result);
}