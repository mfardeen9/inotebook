import { useState } from "react";
// import NoteContext from "../notes/noteContext"
import NoteContext from "./noteContext"

import React from 'react'

function NoteState(props) {
    const noteInitial =[
        {
          "_id": "638baa91831d640cdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd82237e11dae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        },
        {
          "_id": "638baa91831d640cdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd82237e11dae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        }
        ,
        {
          "_id": "638baa91831d640cdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd82237e11dae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        }
      ,
        {
          "_id": "638baa91831d640cdbdd3d73",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great! ",
          "description": "FARDEEN ZINDABAD ",
          "tag": "question up",
          "date": "2022-12-03T19:59:13.449Z",
          "__v": 0
        },
        {
          "_id": "638bab93a8dd82237e11dae0",
          "user": "638a41cab660096b94232a72",
          "title": "Fardeen is Great!",
          "description": "FARDEEN ZINDABAD is so great",
          "tag": "question",
          "date": "2022-12-03T20:03:31.425Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] =useState(noteInitial);
  return (
    
   <NoteContext.Provider value={{notes,setNotes}}>
    {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState