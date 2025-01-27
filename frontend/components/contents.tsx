import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {getContentByUser} from "../firebase/firestore/contents";


export default () => {
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Example usage
                await getContentByUser(user.uid);
            } else {
                console.log("No user is signed in.");
            }
        });
    }, []);

    return (
        <div>
            <p>Protected contents</p>
        </div>
    );
};
