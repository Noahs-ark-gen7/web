import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// React stuff
import { useEffect } from 'react';

// Auth service
import {auth} from '../firebase/firebase'

export default () => {
    useEffect(() => {
        const uiConfig = {
            signInFlow: "popup",
            signInSuccessUrl: "/contents", // redirect URL after successful login
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            tosUrl: "/terms-of-service", // Optional: add your terms of service page URL
            privacyPolicyUrl: "/privacy-policy", // Optional: add your privacy policy URL
        };
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center"></div>
        </>
    )
}