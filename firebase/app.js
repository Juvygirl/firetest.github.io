// Your web app's Firebase configuration
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

function addUser() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var ageInput = document.getElementById("age");
  var mobileNumberInput = document.getElementById("mobileNumber");
  var addressInput = document.getElementById("address");
  var birthdayInput = document.getElementById("birthday");
  var genderInput = document.getElementById("gender");
  var nationalityInput = document.getElementById("nationality");

  var name = nameInput.value;
  var email = emailInput.value;
  var age = ageInput.value;
  var mobileNumber = mobileNumberInput.value;
  var address = addressInput.value;
  var birthday = birthdayInput.value;
  var gender = genderInput.value;
  var nationality = nationalityInput.value;

  if (name && email && age && mobileNumber && address && birthday && gender && nationality) {
    // Get a reference to the "users" node in the database
    var usersRef = firebase.database().ref("users");

    // Use the push method to add a new user to the database
    usersRef.push({
      name: name,
      email: email,
      age: age,
      mobileNumber: mobileNumber,
      address: address,
      birthday: birthday,
      gender: gender,
      nationality: nationality,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }, function(error) {
      if (error) {
        console.error(error);
      } else {
        // Clear the input fields
        nameInput.value = "";
        emailInput.value = "";
        ageInput.value = "";
        mobileNumberInput.value = "";
        addressInput.value = "";
        birthdayInput.value = "";
        genderInput.value = "";
        nationalityInput.value = "";

        // Show a success message
        window.alert("User added successfully!");
      }
    });
  } else {
    window.alert("Please fill in all fields.");
  }
}
