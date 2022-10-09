import * as React from 'react';
import {Delete, Favorite, MoreVert, Share} from '@mui/icons-material';
import {CardActions, CardContent, Card, CardHeader, IconButton, Typography, ListItem} from "@mui/material";
import {actionTypes} from "../../../constants/components/notes-container";

const Note = ({title, isFavorited, date, details, changeNoteFunc}) => {
    return (
        <ListItem disableGutters>
            <Card raised sx={{width:"100%"}}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title={title}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2">
                        {details}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" color={isFavorited ? "error" : "default"}
                                onClick={() => changeNoteFunc(actionTypes.TOGGLE_FAVORITE)}>
                        <Favorite/>
                    </IconButton>
                    <IconButton aria-label="share" onClick={() => changeNoteFunc(actionTypes.SHARE)}>
                        <Share/>
                    </IconButton>
                    <IconButton aria-label="delete" style={{marginLeft: "auto"}}
                                onClick={() => changeNoteFunc(actionTypes.REMOVE)}>
                        <Delete/>
                    </IconButton>
                </CardActions>
            </Card>
        </ListItem>
    );
}

export default Note;
