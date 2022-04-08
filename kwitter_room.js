
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCbhc8gdR6t_8X0Vwka80DO-3sw0hQVmns",
  authDomain: "kwitter-1-ec4bb.firebaseapp.com",
  databaseURL: "https://kwitter-1-ec4bb-default-rtdb.firebaseio.com",
  projectId: "kwitter-1-ec4bb",
  storageBucket: "kwitter-1-ec4bb.appspot.com",
  messagingSenderId: "864401804639",
  appId: "1:864401804639:web:8297580e19470ad289faea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem(user_name);
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}