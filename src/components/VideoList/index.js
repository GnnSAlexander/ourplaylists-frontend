import React from "react"
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import { useHistory, useParams } from "react-router"
import AddIcon from "@material-ui/icons/Add"
import { Loading } from "../Loading"

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  medium: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paddingZero: {
    padding: 0,
  },
}))

export const VideoList = ({ list, loading, addSong }) => {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()

  const handleClick = (data) => {
    const pathName = "/video/" + data.id.videoId
    history.push(pathName, { data })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <List>
        {list.map((item) => {
          const { videoId } = item.id
          const { thumbnails, title } = item.snippet
          return (
            <ListItem
              className={classes.paddingZero}
              style={{ cursor: "pointer" }}
              key={videoId}
              onClick={() => handleClick(item)}
            >
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  className={classes.medium}
                  alt={title}
                  src={thumbnails.default.url}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText>{title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Play"
                  color="secondary"
                  onClick={() =>
                    addSong({
                      title,
                      song_id: videoId,
                      picture: thumbnails.default.url,
                      type: "youtube",
                      playlistId: id,
                    })
                  }
                >
                  <AddIcon fontSize="large" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}
