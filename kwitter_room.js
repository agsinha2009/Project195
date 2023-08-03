

var firebaseConfig = {
      apiKey: "AIzaSyA7-Kr_wT4yotjHgpwrzSqKuTlXY_y8hGs",
      authDomain: "project-95-8f19d.firebaseapp.com",
      databaseURL: "https://project-95-8f19d-default-rtdb.firebaseio.com",
      projectId: "project-95-8f19d",
      storageBucket: "project-95-8f19d.appspot.com",
      messagingSenderId: "749577181699",
      appId: "1:749577181699:web:ad0a49187d030e4c4a0c36"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomname"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
     
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(
            function(childSnapshot) {
                  childKey= childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room_name-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}