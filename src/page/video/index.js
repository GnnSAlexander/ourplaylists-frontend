import { Button, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { useLocation, useParams } from "react-router"
import { Header } from "../../components/header"

export const Video = (props) => {
  const params = useParams()
  const location = useLocation()
  const video = location.state.data
  const { id, snippet } = video
  const { title, thumbnails, publishedAt, channelTitle } = snippet
  console.log(params, location)

  const addVideo = (video) => {
    console.log(video)
  }
  return (
    <>
      <Header />
      <div style={{ padding: 10 }}>
        <Grid container>
          <Grid container item xs={12} md={12}>
            <Paper style={{ padding: 10 }}>
              <img src={thumbnails.medium.url} />
              <Typography variant="h4">{title}</Typography>
              <Typography variant="subtitle1">{channelTitle}</Typography>
              <Typography variant="caption">
                {new Date(publishedAt).toDateString()}
              </Typography>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addVideo(video)}
                >
                  Add
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
