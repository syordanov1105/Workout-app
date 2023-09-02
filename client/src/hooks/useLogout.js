import useAuthContext from "./useAuthContext";
import useWoContext from "./useWoContext";


function useLogout(){

    const {dispatch} = useAuthContext();
    const {dispatch: workoutsDis} = useWoContext();

    const logout = ()=>{
        localStorage.removeItem("user");

        dispatch({type: "LOGOUT"})
        workoutsDis({type: "SET_WORKOUTS", payload: null});
    }

    return {logout};
}

export default useLogout;