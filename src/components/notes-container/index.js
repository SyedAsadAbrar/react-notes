import * as React from 'react';
import Note from "./note";
import {Grid} from "@mui/material";
import NoteDTO from "./note/NoteDTO";

const todaysDate = new Date().toLocaleDateString('en-pk', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

const notes = [
    new NoteDTO("First Note", todaysDate, true, "Hello, this is a very long note woohooooo test hehe im done"),
    new NoteDTO("Second Note", todaysDate, false, "Hello, this is a very long note woohooooo test hehe im done"),
    new NoteDTO("Third Note", todaysDate, false, "Hello, this is a very long note woohooooo test hehe im done"),
    new NoteDTO("Fourth Note", todaysDate, false, "Hello, this is a very long note woohooooo test hehe im done")
];

const NotesContainer = () => {
    console.log("hello", notes.map(note => note.title));

    return (
        <Grid container spacing={2} direction={"column"} mt={2}>
            {notes.map(note =>
                <Grid item xs={6}>
                    <Note title={note.title} date={note.date} isFavorited={note.isFavorited}
                          details={note.details}/>
                </Grid>
            )}
        </Grid>
    );
}

export default NotesContainer;
