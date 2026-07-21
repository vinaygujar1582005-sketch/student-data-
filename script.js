import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    set,
    get,
    child,
    onValue
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

window.saveData = async function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
        const studentRef = ref(db, "student");
        await push(studentRef, { name: name, age: age });

        alert("Data saved successfully");
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

window.loadData = function() {
    const studentRef = ref(db, "student");

    onValue(studentRef, (snapshot) => {
        let output = "";
        
        snapshot.forEach((child) => {
            const data = child.val();
            output += `
                <p>
                <b>Name:</b> ${data.name}<br>
                <b>Age:</b> ${data.age}
                </p>
                <hr>
            `;
        });

        document.getElementById("output").innerHTML = output;
    });
}
