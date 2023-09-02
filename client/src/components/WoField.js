import React from "react";
import useWoContext from "../hooks/useWoContext";
import useAuthContext from "../hooks/useAuthContext.js"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

function WoField(props){

    const {dispatch} = useWoContext();
    const {user} = useAuthContext();

    async function handleClick(){

        if(!user){
            return
        }

        const response = await fetch("/workouts/" + props.workout._id, {
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload: json});
        }
    }

    return <div className="workout-field">
        <h4>{props.workout.title}</h4>
        <p><strong>Load (kg): </strong>{props.workout.load}</p>
        <p><strong>Reps: </strong>{props.workout.reps}</p>
        <p>{formatDistanceToNow(new Date(props.workout.createdAt), {addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
}

export default WoField;