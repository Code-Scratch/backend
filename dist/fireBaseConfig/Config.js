"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyB4SvsC2fkKSHm14Cxp9Sj0mkLD3ZkMtCE",
    authDomain: "code-scratch-62377.firebaseapp.com",
    projectId: "code-scratch-62377",
    storageBucket: "code-scratch-62377.firebasestorage.app",
    messagingSenderId: "514596018010",
    appId: "1:514596018010:web:4fa2b63c070b787ea98563",
    measurementId: "G-RVNVJBGWYN"
};
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(firebaseApp);
