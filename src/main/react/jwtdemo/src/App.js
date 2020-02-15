import React from 'react';
import './App.css';
import Login from "./components/Login";
import axios from "axios";

const App = () => {


    const testPublic = () => {
        axios.get("/api/public")
            .then(() => alert("Can access Public"))
            .catch(() => alert("Cant access Public"))
    };

    const testPrivate = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No Token");
            return;
        }
        console.log(token)

        axios.get("/api/private", {headers: {"Authorization": token}})
            .then(() => alert("Can access Private"))
            .catch(() => alert("Cant access Private"))
    };

    return(

        <div style={{width: 1000, margin: "auto"}}>

            <Login/>
            <button onClick={testPrivate}>private</button>
            <button onClick={testPublic}>public</button>

        </div>

    )

};
export default App;
