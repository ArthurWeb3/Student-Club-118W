const firebaseConfig = {
    apiKey: "AIzaSyDuhLqAjHEdrpBx5CCpjoLjhnYzkvqswUs",
    authDomain: "sjsu-disney-club.firebaseapp.com",
    databaseURL: "https://sjsu-disney-club-default-rtdb.firebaseio.com",
    projectId: "sjsu-disney-club",
    storageBucket: "sjsu-disney-club.appspot.com",
    messagingSenderId: "594738270934",
    appId: "1:594738270934:web:0c2aaf5d48dc3a247e2f77"
  };

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function send(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    detailsRef.push().set({
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
    });
}
