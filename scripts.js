const firebaseConfig = {
    apiKey: "AIzaSyBm1C6c1gmHQW3DUEa3TadYFgCBHsQlZpE",
    authDomain: "otp-authentication-48137.firebaseapp.com",
    projectId: "otp-authentication-48137",
    storageBucket: "otp-authentication-48137.appspot.com",
    messagingSenderId: "776613650469",
    appId: "1:776613650469:web:95944ee44334f61ebc1fcc",
    measurementId: "G-WQYQ7D1BEP"
  };

firebase.initializeApp(firebaseConfig);
render();

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function phoneAuth() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
    }).catch(function(error) {
        alert(error.message);
    });
}

function codeverify() {
    var code = document.getElementById('verificationcode').value;
    confirmationResult.confirm(code).then(function() {
        document.querySelector('.p-conf').style.display = 'block';
        document.querySelector('.n-conf').style.display = 'none';
    }).catch(function() {
        document.querySelector('.p-conf').style.display = 'none';
        document.querySelector('.n-conf').style.display = 'block';
    });
}