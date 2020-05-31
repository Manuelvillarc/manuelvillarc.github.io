<!-- JS -->
    <script src="js/app.js"></script>

(function () {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyC_NWzoivOLE3ozskYmQiyXAOHh1gNzG48",
        authDomain: "ayudapp-4183f.firebaseapp.com",
        databaseURL: "https://ayudapp-4183f.firebaseio.com",
        projectId: "ayudapp-4183f",
        storageBucket: "ayudapp-4183f.appspot.com",
        messagingSenderId: "883314648360",
        appId: "1:883314648360:web:8655fafd5a9a7b2db59c1d"
      };

  firebase.initializeApp(config);

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
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    
    promise.catch(e=>console.log(e.message));

  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
      } else {
          console.log('not logged in');
      }
  });

})();
