import { useState } from "react";
// import NoteContext from "../notes/noteContext"
import NoteContext from "./noteContext"

import React from 'react'
import Notes from "../../components/Notes";

function NoteState(props) {
    const noteInitial =[
        {
          "_id": "638baa91831d6401cdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd8223q17e11dae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        },
        {
          "_id": "638baa91831d640cdwb1dd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd8223e7e11d1ae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        }
        ,
        {
          "_id": "638ba1a91831d640cgdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
       
        
      ]
    const [notes, setNotes] =useState(noteInitial);

    //Add a Note
      const addNote =(title, description,tag)=>{
        const note ={
          "_id": "638bab93a8dxd82237eyyyy11da1e0",
          "user": "638a41cab660096b94t2312a72",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
    //Delete a Note
    const deleteNote =()=>{
        
    }
    //Edit a Note
    const editNote =()=>{
        
    }
  return (
    
   <NoteContext.Provider value={{notes,setNotes, addNote,deleteNote,editNote}}>
    {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState