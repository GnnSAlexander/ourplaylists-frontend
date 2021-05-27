import { Grid, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import { useHistory } from "react-router"
import { Header } from "../../components/header"
import { SearchVideo } from "../../components/searchVideo"
import useUser from "../../hooks/useUser"

export const Home = () => {
  const { isLogged } = useUser()

  const history = useHistory()

  useEffect(() => {
    !isLogged && history.push("/")
  }, [])
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
