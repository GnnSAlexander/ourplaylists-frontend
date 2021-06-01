import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import React from "react"
import usePlaylist from "../../hooks/usePlaylist"
import { Loading } from "../Loading"

import playlist_default from "./playlist-default.jpeg"

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  padding: {
    marginLeft: 10,
  },
}))

export const ListPlaylist = ({ listUpdated }) => {
  const classes = useStyles()
  const { state } = usePlaylist({ listUpdated })
  const { data: playlist } = state
  if (state.loading) {
    return <Loading />
  }

  if (playlist) {
    return (
      <List>
        {playlist.map((p) => (
          <ListItem key={p.id} button>
            <ListItemAvatar>
              <Avatar
                variant="square"
                className={classes.large}
                alt={p.title}
                src={p.image.length >= 20 ? p.image : playlist_default}
              />
            </ListItemAvatar>
            <ListItemText
              className={classes.padding}
              id={p.id}
              primary={`${p.title} - ${p.songs.length} Songs ${new Date(
                p.date_added
              ).toLocaleDateString()}`}
            />
            <ListItemSecondaryAction></ListItemSecondaryAction>
          </ListItem>
        ))}
        {playlist.length === 0 && <h1>No hay playlist</h1>}
      </List>
    )
  }

  return <></>
}
