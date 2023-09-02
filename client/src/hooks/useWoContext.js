import { WoContext } from "../context/WoContext";
import { useContext } from "react";

function useWoContext(){
    const context = useContext(WoContext);

    if(!context){
        throw Error("useWoContext must be used inside an WoContextProvider")
    }

    return context;
}

export default useWoContext;