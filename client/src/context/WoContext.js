import React from "react";
import { createContext, useReducer } from "react";

export const WoContext = createContext();

export const workoutsReducer = (state, action)=> {
    switch (action.type){
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE_WORKOUT":
            return {
                workouts: state.workouts.filter((wo)=>wo._id !== action.payload._id)
            }
        default:
                return state;
    }
}
function WoContextProvider({children}) {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });


    return(
        <WoContext.Provider value={{...state, dispatch}}>
            {children}
        </WoContext.Provider>
    );
}

export  default WoContextProvider;