import { Grid, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Header } from "../../components/header"
import CreatePlaylist from "../../components/createPlaylist"
import { ListPlaylist } from "../../components/ListPlaylist"
import usePlaylist from "../../hooks/usePlaylist"

export const Dashboard = () => {
  const [listUpdated, setListUpdated] = useState(0)

  //const { state } = usePlaylist({ listUpdated })

  return (
    <div>
      <Header />
      <div style={{ margin: 5 }}>
        <Grid container justify="center" spacing={1}>
          <Grid item md={12} xs={12}>
            <Typography variant="h1">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListPlaylist listUpdated={listUpdated} />
            <CreatePlaylist setListUpdated={setListUpdated} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
