import React, {useState, useEffect} from 'react'
import axios from "axios";
import {login, logout, tokenValid} from "./Session";
const Login = ({}) => {
    /*************
     *
     *  HOOKS
     *
     *************/
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(!!tokenValid());

    /*************
     *
     *  FUNCTIONS
     *
     *************/

    const submit = () => {
        login(name, password)
            .then(() => setAuthenticated(true))
            .catch(() => setAuthenticated(false))
    };

    const handleLogout = () => {
        logout();
        setAuthenticated(!!tokenValid())
    };

    /*************
     *
     *  RENDERING
     *
     *************/


    return (
        <div>
            {authenticated ?
                <div>
                    <h3>Logged In</h3>
                    <button onClick={handleLogout}>Logout</button>
                </div>:
                <div>
                    <h3>Login</h3>
                    <p>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </p>
                    <p>
                        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                    </p>
                    <p>
                        <button onClick={submit}>Login</button>
                    </p>
                </div>
            }
        </div>
    )

};

export default Login