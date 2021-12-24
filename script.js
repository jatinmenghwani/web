<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBkmaMxHuhOsvlu2lpliTyrKwaz4hT310Y",
      authDomain: "my-project-caa1b.firebaseapp.com",
      projectId: "my-project-caa1b",
      storageBucket: "my-project-caa1b.appspot.com",
      messagingSenderId: "980027832741",
      appId: "1:980027832741:web:92507295adf5ffd97b504c",
      measurementId: "G-L7FEPMNBF1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  </script> 

function imagenext() {
    var Image_Id = document.getElementById('imgClickAndChange');
    if (Image_Id.src.match("1.jpeg")) {
        Image_Id.src = "2.jpeg"; 
        
    }
    else {
        Image_Id.src = "3.jpeg";
    }}
    
    function imageprev(){
        var Image_Id = document.getElementById('imgClickAndChange');
        if (Image_Id.src.match("3.jpeg")) {
            Image_Id.src = "2.jpeg";
        }
        else{
            Image_Id.src = "1.jpeg";
        }
    }

  // -----------------Initialize Firebase---------------------
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)

  var x = document.getElementById('imgClickAndChange');
  if(x.src.match("1.jpeg"))
  {
    var firebaseRef1 = firebase.database().ref("Person1");
  document.querySelector('#button2').addEventListener('click', ()=>{
	  var x = 1;
	  firebaseRef1.child('Attendance').set(x);
  })

  }
  
  else if(x.src.match("2.jpeg"))
  {
    var firebaseRef2 = firebase.database().ref("Person2");
  document.querySelector('#button2').addEventListener('click', ()=>{
	  var x = 1;
	  firebaseRef2.child('Attendance').set(x);
  })

  }
  