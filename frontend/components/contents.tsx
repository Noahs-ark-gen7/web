import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {getContentByUser} from "../firebase/firestore/contents";
import {getUserName} from "../firebase/firestore/users";


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
