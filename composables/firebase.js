import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, ref as fbref, set } from "firebase/database";

export const useFirebase = () => {
  return useState("firebase", () => {
    const runtimeConfig = useRuntimeConfig();
    const firebaseConfig = {
      apiKey: runtimeConfig.firebase.apiKey,
      authDomain: runtimeConfig.firebase.authDomain,
      databaseURL: runtimeConfig.firebase.databaseURL,
      projectId: runtimeConfig.firebase.projectId,
      storageBucket: runtimeConfig.firebase.storageBucket,
      messagingSenderId: runtimeConfig.firebase.messagingSenderId,
      appId: runtimeConfig.firebase.appId,
      measurementId: runtimeConfig.firebase.measurementId,
    };

    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    // const db = getDatabase(app);
    return app;
  });
};
