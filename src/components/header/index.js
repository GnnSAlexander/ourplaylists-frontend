import { Avatar, Button, Grid, Menu, MenuItem } from "@material-ui/core"
import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import useUser from "../../hooks/useUser"
import logo from "../../logo.svg"
import { LoginButton } from "../loginButton"

export const Header = () => {
  return (
    <header className="App-header">
      <Grid container alignItems="center" justify="flex-end">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <LoginButton />
        </Grid>
      </Grid>
    </header>
  )
}
