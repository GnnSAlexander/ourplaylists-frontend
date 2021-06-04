import React, { useEffect } from "react"
import { useParams } from "react-router"
import useWatch from "../../hooks/useWatch"

import YouTube from "react-youtube"
import { Grid, makeStyles } from "@material-ui/core"
import { SongList } from "../../components/songList"

const useStyles = makeStyles({
  iframe: {
    width: "100%",
    height: "93.2vh",
  },
})

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

export const WatchPage = () => {
  const classes = useStyles()
  const { id } = useParams()

  const { state, nextSong, setSongSelected } = useWatch({ id })

  function _onReady(event) {
    console.log(event.target)
    //event.target.playVideo()
  }

  const _onStateChange = (event) => {
    console.log("State Change")
    console.log(event.target)
  }

  const _onPause = (event) => {
    console.log("pause")
    console.log(event.target)
  }
  const _onEnd = (event) => {
    console.log("termino?")
    console.log(event.target)
    nextSong()
  }

  return (
    <Grid container item md={12}>
      {state.songSelected && (
        <>
          <Grid item md={8} xs={12}>
            <YouTube
              videoId={state.songSelected.song_id}
              className={classes.iframe}
              opts={opts}
              onReady={_onReady}
              onStateChange={_onStateChange}
              onPause={_onPause} // defaults -> noop
              onEnd={_onEnd}
            />
          </Grid>
          <Grid item md={4}>
            <SongList
              songs={state.songs}
              watch
              handleSelectSong={setSongSelected}
            />
          </Grid>
        </>
      )}
    </Grid>
  )
}
