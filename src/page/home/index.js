import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { Header } from "../../components/header"
import { SearchVideo } from "../../components/searchVideo"

export const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ margin: 5 }}>
        <Grid container spacing={1}>
          <Typography variant="h1">HomePage</Typography>
          <Grid item xs={12}>
            <SearchVideo />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
