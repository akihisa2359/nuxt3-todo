import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
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

  initializeApp(firebaseConfig);
});
