import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, isLoading} = useSignup();

    async function handleSubmit(event){
        event.preventDefault();

        await signup(email, password);

    }

    return(
        /*<form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>

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

        <button disabled={isLoading}>Sign up</button>
        {error && <div className="error">{error}</div>}

        </form>*/

        <div className="signup">
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Signup</h2>
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
                    </form>
                </div>
            </div>
            {error && <div className="error">{error}</div>}
        </section>
        </div>
    );
}
export default Signup;