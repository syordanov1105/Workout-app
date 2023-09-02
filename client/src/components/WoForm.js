import React, { useState } from "react";
import useWoContext from "../hooks/useWoContext.js";
import useAuthContext from "../hooks/useAuthContext.js"

function WoForm(){

    const {dispatch} = useWoContext();
    const {user} = useAuthContext();

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(!user){
            setError("You must be logged in");
            return;
        }

        const workout = {title, load ,reps}

        const response = await fetch("/workouts",{
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if(response.ok){
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            setEmptyFields([]);
            console.log("New workout added", json);
            dispatch({type: "CREATE_WORKOUT", payload: json});
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>

        <label>Excersize Title:</label>
        <input type="text" 
            onChange={(event)=>setTitle(event.target.value)} 
            value={title}
            className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Load (kg):</label>
        <input type="number" 
            onChange={(event)=>setLoad(event.target.value)} 
            value={load}
            className={emptyFields.includes("load") ? "error" : ""}
        />

        <label>Reps:</label>
        <input type="number" 
            onChange={(event)=>setReps(event.target.value)} 
            value={reps}
            className={emptyFields.includes("reps") ? "error" : ""}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WoForm;