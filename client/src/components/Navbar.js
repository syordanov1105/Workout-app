import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

function Navbar(){

    const {logout} = useLogout();
    const { user } = useAuthContext();

    function handleClick(){
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1><span className="material-symbols-outlined">exercise</span>Workout App</h1>
                </Link>
                <nav>
                    {user && ( 
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="navButtons">
                            <div className="navLogin"><Link to="/login">Log In</Link></div>
                            <div className="navSignup"><Link to="/signup">Sign Up</Link></div>
                        </div>
                        
                    )}
                </nav>
            </div>
        </header>
    );
}
export default Navbar;