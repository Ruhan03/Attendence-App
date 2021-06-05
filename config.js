import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwAP5usSYn9ajc2Cft-j2r3yGH9rKGohM",
  authDomain: "attendence-app-46fd7.firebaseapp.com",
  databaseURL: "https://attendence-app-46fd7-default-rtdb.firebaseio.com",
  projectId: "attendence-app-46fd7",
  storageBucket: "attendence-app-46fd7.appspot.com",
  messagingSenderId: "946623146852",
  appId: "1:946623146852:web:018fbf1a0d291502d06871"
};


if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig)
}
export default firebase.database();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  