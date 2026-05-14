// firebase/firebaseServer.js — SIN "use client"
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Usa un nombre distinto ("server") para no chocar con la app del cliente
function getServerApp() {
  const existing = getApps().find((a) => a.name === "server");
  if (existing) return existing;
  return initializeApp(firebaseConfig, "server");
}

const app = getServerApp();
const dbServer = getFirestore(app);

export { dbServer };