
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDOvVTYlLIoq4llvkkn2p82v3WfP40U3bA",
      authDomain: "kwitter-9d489.firebaseapp.com",
      databaseURL: "https://kwitter-9d489-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d489",
      storageBucket: "kwitter-9d489.appspot.com",
      messagingSenderId: "970057297008",
      appId: "1:970057297008:web:81644fccd0682339bb98b5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

    function add_room()
    {
          room_name=document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name- "+Room_names );
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
