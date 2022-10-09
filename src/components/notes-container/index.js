import * as React from 'react';
import Note from "./note";
import {Alert, Box, Collapse, Container, Grid, List, Slide, Snackbar} from "@mui/material";
import NoteDTO from "./note/NoteDTO";
import {useState} from "react";
import {actionTypes} from "../../constants/components/notes-container";
import {TransitionGroup} from "react-transition-group";
import {loremIpsum} from "lorem-ipsum";
import {getRandomNum} from "../../constants/common";
import {SentimentDissatisfied} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const todaysDate = new Date().toLocaleDateString('en-pk', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

const notesMock = [
    new NoteDTO("First Note", todaysDate, true, loremIpsum({count: getRandomNum(1, 5)})),
    new NoteDTO("Second Note", todaysDate, false, loremIpsum({count: getRandomNum(1, 5)})),
    new NoteDTO("Third Note", todaysDate, false, loremIpsum({count: getRandomNum(1, 5)})),
    new NoteDTO("Fourth Note", todaysDate, false, loremIpsum({count: getRandomNum(1, 5)}))
];

const SlideTransition = (props) => <Slide {...props} direction="up"/>;

const NotesContainer = () => {
    const [notes, setNotes] = useState(notesMock);
    const [isSnackBarOpen, setSnackBarOpen] = useState(false);

    const editNotes = (index, actionType) => {
        const oldNotes = [...notes];

        console.log("editNotes called", index, actionType)

        if (actionType === actionTypes.REMOVE) {
            setNotes(oldNotes.filter((note, noteIndex) => noteIndex !== index));
        } else if (actionType === actionTypes.TOGGLE_FAVORITE) {
            setNotes(oldNotes.map((note, noteIndex) => new NoteDTO(note.title, note.date, noteIndex === index ? !note.isFavorited : note.isFavorited, note.details)));
        } else {
            setSnackBarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackBarOpen(false);
    }

    return (
        <Box sx={{mt: 2}}>

            <List>
                <TransitionGroup>{notes.map((note, index) =>
                    <Collapse key={note.title}><Grid item xs={6}>
                        <Note title={note.title} date={note.date} isFavorited={note.isFavorited}
                              details={note.details} changeNoteFunc={(actionType) => editNotes(index, actionType)}/>
                    </Grid></Collapse>
                )}
                </TransitionGroup>
            </List>
            <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}
                      TransitionComponent={SlideTransition} key={SlideTransition.name}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{width: '100%'}}>
                    Note shared successfully!
                </Alert>
            </Snackbar>
            {!notes.length &&
                <Container sx={{textAlign:"center"}}>
                    <SentimentDissatisfied fontSize={"large"} color={"disabled"}/>
                    <Typography variant="subtitle2" sx={{color: "text.disabled"}}>It's a bit empty in here... Why not
                        add a new note?</Typography>
                </Container>
            }
        </Box>
    );
}

export default NotesContainer;
