
var firebaseConfig = {
    apiKey: "AIzaSyA7-Kr_wT4yotjHgpwrzSqKuTlXY_y8hGs",
    authDomain: "project-95-8f19d.firebaseapp.com",
    databaseURL: "https://project-95-8f19d-default-rtdb.firebaseio.com",
    projectId: "project-95-8f19d",
    storageBucket: "project-95-8f19d.appspot.com",
    messagingSenderId: "749577181699",
    appId: "1:749577181699:web:ad0a49187d030e4c4a0c36"
  };

firebase.initializeApp(firebaseConfig);

u1=localStorage.getItem("user_name");
r1=localStorage.getItem("room_name");

function send(){
  g=document.getElementById("input1").value;
  firebase.database().ref(r1).push({
        name:u1,
        message:g,
        like:0
  });
  document.getElementById("input1").value ="";
}

function getData() { firebase.database().ref("/"+r1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
n1=message_data['name'];
m1=message_data['message'];
l1=message_data['like'];
n1tag="<h4>"+n1+"<img src='tick.png' class='user_tick'></h4>";
m1tag="<h4 class='message_h4'>"+m1+"</h4>";
l1tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+l1+" onclick='buttonl(this.id)'>";
stag="<span class='glyphicon glyphicon-thumbs-up'>like: "+l1+"</span> </button> <hr>";
row=n1tag+m1tag+l1tag+stag;
document.getElementById("output").innerHTML+=row;
//End code
  } });  }); }
getData();

function buttonl(ms_id){
console.log(ms_id);
button_id=ms_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(r1).child(ms_id).update({
  like:updatedlikes
});
}

function w(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location="index.html";
  }
  
