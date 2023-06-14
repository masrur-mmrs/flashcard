// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "./.firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);


export const getFlashCards = async() => {

    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
        return snapshot.val();
    }

    return null;

}


export default app;