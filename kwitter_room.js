
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB3KkErptFI8feO-lFV7bUZRxfazgbKgi4",
      authDomain: "kwitter-92f18.firebaseapp.com",
      databaseURL: "https://kwitter-92f18-default-rtdb.firebaseio.com",
      projectId: "kwitter-92f18",
      storageBucket: "kwitter-92f18.appspot.com",
      messagingSenderId: "546659859488",
      appId: "1:546659859488:web:a57403d1f397861ab65045"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
