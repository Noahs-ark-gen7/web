import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getContentByUser } from "../../firebase/firestore/contents";
import { useNavigate } from "react-router";

export default () => {
    let navigate = useNavigate();

    const navigateToNewContents = () => {
        navigate("/new-contents");
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Example usage
                await getContentByUser(user.uid);
            } else {
                console.log("No user is signed in.");
            }
        });

        let user = auth.currentUser;
        if (user) {
            navigate("/contents");
        } else {
            console.log("No user is signed in.");
        }
    }, []);

    return (
        <div>
            <button onClick={navigateToNewContents} className="px-4 py-2 bg-red-500 cursor-pointer text-white rounded-md">Create New Content</button>
        </div>
    );
};
