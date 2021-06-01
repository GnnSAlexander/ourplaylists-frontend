import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { Header } from "../../components/header"
import { ListPlaylist } from "../../components/ListPlaylist"

export const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ margin: 5 }}>
        <Grid container spacing={1}>
          <Typography variant="h1">Playlists</Typography>
          <Grid item xs={12}>
            <ListPlaylist />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
