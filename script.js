import { initializeApp } from
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    set,
    get,
    child
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLToeoQnHrZ9MYC8YMqleeK5vNIzUGh_w",
  authDomain: "student-database-10560.firebaseapp.com",
  databaseURL: "https://student-database-10560-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-database-10560",
  storageBucket: "student-database-10560.firebasestorage.app",
  messagingSenderId: "215298447870",
  appId: "1:215298447870:web:06c92a9c6f3dd0f02348af",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.saveData = function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const studentRef = push(ref(db, "students"));

    set(studentRef, {
        name: name,
        age: age
    });

    alert("Data Saved Successfully");
};

window.loadData = function () {
    const output = document.getElementById("output");
    output.innerHTML = "";

    get(child(ref(db), "students")).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val();
                output.innerHTML += `
                    <p><b>Name:</b> ${data.name} |
                    <b>Age:</b> ${data.age}</p>
                `;
            });
        } else {
            output.innerHTML = "No data found.";
        }
    });
};

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