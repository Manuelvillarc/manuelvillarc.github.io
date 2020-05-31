(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_NWzoivOLE3ozskYmQiyXAOHh1gNzG48",
    authDomain: "ayudapp-4183f.firebaseapp.com",
    databaseURL: "https://ayudapp-4183f.firebaseio.com",
    projectId: "ayudapp-4183f",
    storageBucket: "ayudapp-4183f.appspot.com",
    messagingSenderId: "883314648360",
    appId: "1:883314648360:web:22ba6a1caff53c66b59c1d",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const txtPassword2 = document.getElementById("txtPassword2");
  const btnSignUp = document.getElementById("btnSignUp");

  // Add signup event
  btnSignUp.addEventListener("click", (e) => {
    // Get email and pass
    // TODO: CHECK FOR REAL E-MAILS
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const pass2 = txtPassword2.value;
    const auth = firebase.auth();
    var long_pass = pass.length;

    if (pass2 != pass) {
      alert("Verifique que las contraseñas coincidan");
    } else {
      if (long_pass < 7) {
        alert("La contraseña debe contener mínimo 7 caracteres");
      } else {
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email.trim(), pass);

        promise.catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Error " + errorCode + ": " + errorMessage);
        });
      }
    }
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("logged out");
      }, function(error) {
        // An error happened.
        console.log(error);
      });
      $("#txtEmail").val("");
      $("#txtPassword").val("");
      $("#txtPassword2").val("");
      window.location.href = "success.html";
    } else {
      console.log("not logged in");
    }
  });
})();
