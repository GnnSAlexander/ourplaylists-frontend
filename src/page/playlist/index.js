import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { useParams } from "react-router"
import { Loading } from "../../components/Loading"
import usePlaylist from "../../hooks/usePlaylist"
import playlist_default from "./playlist-default.jpeg"

import { SongList } from "../../components/songList"
import AddSong from "../../components/addSong"

const useStyles = makeStyles({
  img: {
    width: "100%",
  },
  title: {
    "& div": {
      width: "inherit",
    },
  },
})

export const PlaylistPage = () => {
  const classes = useStyles()
  const params = useParams()
  const { id } = params
  const { state, setRefetch } = usePlaylist({ id })
  const { data: playlist } = state

  if (state.loading) {
    return <Loading />
  }

  if (playlist) {
    return (
      <Grid container justify="center">
        <Grid item md={3}>
          <img
            className={classes.img}
            src={
              playlist.image.length >= 20 ? playlist.image : playlist_default
            }
            alt={playlist.title}
          />
        </Grid>
        <Grid
          className={classes.title}
          container
          alignContent="center"
          item
          md={7}
        >
          <div>
            <Typography variant="caption">Playlist</Typography>
          </div>
          <div>
            <Typography variant="h2">{playlist.title}</Typography>
          </div>
          <div>
            <AddSong playlist_title={playlist.title} reloadSongs={setRefetch} />
          </div>
        </Grid>
        <Grid container item md={10}>
          <SongList songs={playlist.songs} reloadSongs={setRefetch} />
        </Grid>
      </Grid>
    )
  }
  return <></>
}
