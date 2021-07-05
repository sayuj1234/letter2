import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyATBsp6sJN7dWtafU44p8rxcAi4S3t8jCY",
    authDomain: "newsletter-95c62.firebaseapp.com",
    databaseURL: "https://newsletter-95c62-default-rtdb.firebaseio.com",
    projectId: "newsletter-95c62",
    storageBucket: "newsletter-95c62.appspot.com",
    messagingSenderId: "301452863352",
    appId: "1:301452863352:web:fde5a45c70704c6a434a8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();