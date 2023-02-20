var firebaseConfig = {
  apiKey: "AIzaSyB-vGEOyySC4JMYdtG1Ret4pbiZLmhknLs",
  authDomain: "jeanycar-25a07.firebaseapp.com",
  databaseURL: "https://jeanycar-25a07-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "jeanycar-25a07",
  storageBucket: "jeanycar-25a07.appspot.com",
  messagingSenderId: "469828085729",
  appId: "1:469828085729:web:4bc30a96b8e227f0c9d4a0",
  measurementId: "G-7WFEHXBYJP"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the user list table
var userList = document.getElementById("user-list");

// Retrieve the user data from the database and populate the HTML table
database.ref("users").on("value", function(snapshot) {
  userList.innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    var row = userList.insertRow();
    row.insertCell().innerHTML = childData.name;
    row.insertCell().innerHTML = childData.email;
    row.insertCell().innerHTML = childData.age;
    row.insertCell().innerHTML = childData.mobileNumber;
    row.insertCell().innerHTML = childData.address;
    row.insertCell().innerHTML = childData.birthday;
    row.insertCell().innerHTML = childData.gender;
    row.insertCell().innerHTML = childData.nationality;
  });
});
