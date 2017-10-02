import config from './config';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(config.firebase);
const db = firebaseApp.database();
export default db;