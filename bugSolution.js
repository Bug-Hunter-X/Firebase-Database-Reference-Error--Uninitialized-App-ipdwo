import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  // ... your Firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Asynchronous database access
const databaseRef = ref(database, 'path/to/data');

// Use promises to ensure Firebase initialization completes
initializeApp(firebaseConfig).then(() => {
  onValue(databaseRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
});
