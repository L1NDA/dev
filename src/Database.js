  import * as firebase from 'firebase';
  
  var config = {
    apiKey: "AIzaSyA_hfKDMpBi4ot-VGBnBoIwHenERTIwOl0",
    authDomain: "div-1c0c2.firebaseapp.com",
    databaseURL: "https://div-1c0c2.firebaseio.com",
    projectId: "div-1c0c2",
    storageBucket: "",
    messagingSenderId: "180264721425"
  };
  
  firebase.initializeApp(config);
  
  export function storeData(data) {
    firebase.database().ref('notes/').set(data);
  }
  
  export function pullData() {
    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('notes/').once('value').then(function(snapshot) {
        var notes = snapshot.val();
        console.log("database: " + notes);
        return notes;
      });
  }