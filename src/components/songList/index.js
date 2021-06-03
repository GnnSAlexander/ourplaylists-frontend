import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import ourplaylist from "../../services/ourplaylist"

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  medium: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  padding: {
    marginLeft: 10,
  },
}))

export const SongList = ({ songs, reloadSongs }) => {
  const classes = useStyles()

  const handleRemoveSong = (id) => {
    ourplaylist
      .deleteSong(id)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
    reloadSongs({})
  }

  return (
    <Grid container item md={12}>
      <Grid item md={12}>
        <Typography variant="h4">Songs</Typography>
      </Grid>
      <Grid item md={12}>
        <List>
          {songs.map((song) => (
            <ListItem button key={song.id}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  className={classes.medium}
                  alt={song.title}
                  src={song.picture.length >= 20 ? song.picture : "default.png"}
                />
              </ListItemAvatar>
              <ListItemText>{song.title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Play"
                  color="secondary"
                  onClick={() => handleRemoveSong(song.id)}
                >
                  <DeleteForeverIcon fontSize="large" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
