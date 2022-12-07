import { useState } from "react";
import NoteContext from "../noteContext";

const NoteState = (props)=>{
    const s1 ={
        "name":"Fardeen",
        "class":"5B"
    }
    const [state, setState] = useState(s1);
    // eslint-disable-next-line 
    const update =()=>{
        setTimeout(() => {
            setState=({
            "name":"Akshay",
            "class":"10B"
        })
            
        }, 1000);
    }
    return(
       
        <NoteContext.Provider value ={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;