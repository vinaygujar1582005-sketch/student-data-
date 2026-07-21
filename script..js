import { initializeApp } from
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

 
 import {
getDatabase,
ref,
push,
set,
onValue
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLToeoQnHrZ9MYC8YMqleeK5vNIzUGh_w",
  authDomain: "student-database-10560.firebaseapp.com",
  databaseURL: "https://student-database-10560-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-database-10560",
  storageBucket: "student-database-10560.firebasestorage.app",
  messagingSenderId: "215298447870",
  appId: "1:215298447870:web:06c92a9c6f3dd0f02348af",
};
window.loadData = function () {
    const studentRef = ref(db, "student");

    onValue(studentRef, (snapshot) => {
        console.log(snapshot.val()); // Check if data is received

        let output = "";

        snapshot.forEach((child) => {
            const data = child.val();

            output += `
                <p><b>Name:</b> ${data.name}</p>
                <p><b>Age:</b> ${data.age}</p>
                <hr>
            `;
        });

        document.getElementById("output").innerHTML = output;
    });
};

       
window.saveData = async function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    try {

        const studentRef = ref(db, "student");

await push(studentRef, {
    name: name,
    age: age
});

        });

        alert("Data Saved");

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";

    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

        document.getElementById("output").innerHTML = output;

    });
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.saveData = async function () {

     let name = document.getElementbyId("name").value;
     let age = document.getElementbyId("age").value;

    try {
     
          const studentref = (db,"student");
  
         await push(studentref, {
                  name:name, 
                  age:age
             
});

     alert("Data saved successfully");

      document.getElementbyId("name").value="";
      document.getElementbyId("age").value="";

} catch (err) {
   console.log(err);
   alert(err.message);
  }
}
 
window.loadData = function() {
  
    const studentref=ref(db,"student");

    onValue(studentref,(snapshot)=>{

      let output="";
      
       snapshot.forEach((child))=>{

        let data=child.val();

        output+='
        <p>
        <b>Name:</b> ${data.name}<br>
        <b>Age:</b> ${data.age}
        </p>
        <hr>
         ';

        });

         document.getElementbyId("output").innerHTML=output;

     });
}       