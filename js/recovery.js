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
  const btnRecover = document.getElementById("btnRecover");

  // Add signup event
  btnRecover.addEventListener("click", (e) => {
    // Get email and pass
    // TODO: CHECK FOR REAL E-MAILS
    const email = txtEmail.value;
    const auth = firebase.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
        alert("Se ha enviado un correo de recuperación a la dirección E-mail especificada");
        $("#txtEmail").val("");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + ": " + errorMessage);
      });

  });

})();
