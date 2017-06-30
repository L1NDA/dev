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
  
  export function storeData(data, userId) {
    return firebase.database().ref(userId).set(data);
  }
  
  export function storeNotes(data, userId) {
    return firebase.database().ref(userId + "notepad").set(data);
  }
  
  export function storeOpen(data, userId) {
    firebase.database().ref(userId + "arrow").set(data);
    console.log("data: " + data)
    console.log("userId: " + userId)
  }
  
  export function pullData(userId) {
    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref(userId).once('value').then(function(snapshot) {
        var notes = snapshot.val();
        // console.log("pullData: " + snapshot.val())
        return notes;
      });
  }
  
  export function pullNotes(userId) {
    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref(userId + "notepad").once('value').then(function(snapshot) {
        var notes = snapshot.val();
        // console.log("database: " + notes);
        return notes;
      });
  }
  
  export function pullOpen(userId) {
    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref(userId + "arrow").once('value').then(function(snapshot) {
        var notes = snapshot.val();
        // console.log("pullData: " + snapshot.val())
        return notes;
      });
  }