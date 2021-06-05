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
  selected: {
    backgroundColor: theme.palette.secondary.main,
    "& .MuiTypography-body1": {
      color: "white",
      fontWeight: "bold",
    },
  },
}))

export const SongList = ({
  songs,
  reloadSongs,
  watch,
  handleSelectSong,
  songSelected,
}) => {
  const classes = useStyles()

  const handleRemoveSong = (id) => {
    ourplaylist
      .deleteSong(id)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
    reloadSongs({})
  }

  const selectSong = (song_id) => {
    handleSelectSong(song_id)
  }

  return (
    <Grid container item md={12}>
      <Grid item md={12}>
        <Typography variant="h4">Songs</Typography>
      </Grid>
      <Grid item md={12}>
        <List>
          {songs.map((song) => {
            const selected =
              watch && songSelected?.id === song.id && classes.selected
            return (
              <ListItem
                className={selected}
                button
                key={song.id}
                onClick={() => {
                  watch && selectSong(song.song_id)
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.medium}
                    alt={song.title}
                    src={
                      song.picture.length >= 20 ? song.picture : "default.png"
                    }
                  />
                </ListItemAvatar>
                <ListItemText>{song.title}</ListItemText>
                <ListItemSecondaryAction>
                  {!watch && (
                    <IconButton
                      aria-label="Play"
                      color="secondary"
                      onClick={() => handleRemoveSong(song.id)}
                    >
                      <DeleteForeverIcon fontSize="large" />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
}
