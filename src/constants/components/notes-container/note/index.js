import * as React from 'react';
import {Delete, Favorite, MoreVert, Share} from '@mui/icons-material';
import {Avatar, CardActions, CardContent, Card, CardHeader, IconButton, Typography} from "@mui/material";

const Note = ({title, isFavorited, date, details, changeNoteFunc}) => {
    return (
        <Card raised>
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
                <IconButton aria-label="add to favorites" color={isFavorited ? "error" : "default"} onClick={()=>changeNoteFunc(actionTypes)}>
                    <Favorite/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
                <IconButton aria-label="delete" style={{marginLeft: "auto"}}>
                    <Delete/>
                </IconButton>
            </CardActions>
        </Card>
    )
        ;
}

export default Note;
