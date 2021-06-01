import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core"
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import useUser from "../../hooks/useUser"
import ROUTES from "../../routes/ROUTES"
import Context from "../../context/UserContext"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}))

export const LoginButton = () => {
  const classes = useStyles()
  const { user } = useContext(Context)
  const { isLogged, logout } = useUser()

  const [open, setOpen] = useState(false)
  const history = useHistory()
  useEffect(() => {
    !isLogged && history.push(ROUTES.HOME)
  }, [isLogged])

  const handleLogin = () => {
    history.push(ROUTES.LOGIN)
  }

  const handleLogOut = () => {
    logout()
  }

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleDashboard = () => {
    history.push(ROUTES.DASHBOARD)
  }

  return (
    <>
      {isLogged ? (
        <div className={classes.root}>
          <Avatar
            onClick={handleClick}
            style={{ background: "orange" }}
            alt={user?.username}
          >
            {user?.username.charAt(0)}
          </Avatar>
          <Menu
            id="simple-menu"
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleDashboard}>My Dashboard</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleLogin}
        >
          LogIn
        </Button>
      )}
    </>
  )
}
