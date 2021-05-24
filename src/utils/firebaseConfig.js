import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCVPb5Wkan3Ma6shPRxV89ilDB7wrlN0yE",
  // auth
  authDomain: "graph-and-co-react.firebaseapp.com",
  databaseURL: "https://graph-and-co-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "graph-and-co-react",
  storageBucket: "graph-and-co-react.appspot.com",
  messagingSenderId: "675038107018",
  appId: "1:675038107018:web:f949930d2f33017742a473",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;