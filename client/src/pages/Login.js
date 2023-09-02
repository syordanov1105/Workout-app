import React, { useState } from "react";
import useLogin from "../hooks/useLogin"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, error, isLoading} = useLogin();

    async function handleSubmit(event){
        event.preventDefault();

        await login(email, password);

    }

    return(
        /*<form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <label>Email:</label>
        <input 
            type="email"
            onChange={(event)=>setEmail(event.target.value)}
            value={email}
        />

        <label>Password:</label>
        <input 
            type="password"
            onChange={(event)=>setPassword(event.target.value)}
            value={password}
        />

        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}

        </form>*/
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input 
                                type="email" 
                                onChange={(event)=>setEmail(event.target.value)}
                                value={email}  
                            />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input 
                                type="password" 
                                onChange={(event)=>setPassword(event.target.value)}
                                value={password}  
                            />
                            <label>Password</label>
                        </div>
                        <button disabled={isLoading}>Log in</button>
                        <div className="register">
                            <p>Don't have an account <a href="/signup">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
            {error && <div className="error">{error}</div>}
        </section>
    );
}
export default Login;