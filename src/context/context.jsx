/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const onSent = async (prompt) =>{
  
        await runChat(prompt);
    }

    onSent("Hello people in this world");
    
    const contextValue ={}

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider; 
