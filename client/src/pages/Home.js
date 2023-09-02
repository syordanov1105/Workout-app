import React, { useEffect } from "react";
import useWoContext from "../hooks/useWoContext.js"
import useAuthContext from "../hooks/useAuthContext.js"

//components
import WoField from "../components/WoField";
import WoForm from "../components/WoForm"
function Home(){

    const {workouts, dispatch} = useWoContext();
    const {user} = useAuthContext();

    useEffect(()=>{
        const fetchingWO = async ()=>{
            const response = await fetch("/workouts",{
                headers: {
                    "Authorization" : `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json});
            }
        };

        if(user){
            fetchingWO();
        }
    }, [dispatch, user]);

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>{
                    return <WoField key={workout._id} workout={workout} />
                })}
            </div>
            <WoForm />
        </div>
    );
}
export default Home;