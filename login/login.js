const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyxsNMHQOeRaGDdu0KV6KfIdFSd2l8PKk",
  authDomain: "login-elegets.firebaseapp.com",
  databaseURL: "https://login-elegets-default-rtdb.firebaseio.com",
  projectId: "login-elegets",
  storageBucket: "login-elegets.appspot.com",
  messagingSenderId: "176329985795",
  appId: "1:176329985795:web:50fa5c3fadd933c4d5e336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const loginform = document.getElementById('loginform');
const rememberMeCheckbox = document.getElementById('rememberMe');

 // Check if user is already logged in
const user = auth.currentUser;
if (user) {
    // User is logged in, redirect to dashboard or perform other actions
    console.log('User is already logged in:', user);
    alert('User is already logged in.');
    // You can redirect or perform other actions here
}


document.getElementById('signup').addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var username = document.getElementById('signupUsername').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email
            });

            alert('User created successfully');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
});

document.getElementById('loginform').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = rememberMeCheckbox.checked;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;

            if (rememberMe) {
                // Set a cookie or use localStorage to store user's authentication state
                // For simplicity, this example uses localStorage
                localStorage.setItem('userLoggedIn', JSON.stringify(true));
            }

            console.log('Logged in user:', user);
            alert('Login success!');
            window.location.href = "main-page.html";
        })
        .catch((error) => {
            // Handle errors during login
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error (${errorCode}): ${errorMessage}`);
            alert(errorMessage);
        });
});
window.addEventListener('load', () => {
    const storedUserLoggedIn = localStorage.getItem('userLoggedIn');

    if (storedUserLoggedIn && JSON.parse(storedUserLoggedIn)) {
        // Perform actions for a user who is remembered as logged in
        console.log('User is remembered as logged in.');
        alert('User is remembered as logged in.');
        // You can redirect or perform other actions here
    }
});