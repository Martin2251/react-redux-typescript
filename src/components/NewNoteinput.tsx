import React, { ChangeEvent, useState } from "react"

interface NewNoteInputProps{
    addNote(note:string): void;
}


export const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) => {
    const [note, setNote] = useState("")


    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }
    return(
        <div>
        <input type="text" onChange={updateNote} value= {note} name="note" placeholder='note' />
        <button onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}

