import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import React from "react"
import { useHistory } from "react-router"
import logo from "../../logo.svg"
import { LoginButton } from "../loginButton"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Header = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <AppBar position="static">
      <Toolbar>
        {history.length > 0 && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
        )}

        <Typography variant="h6" className={classes.title}>
          OurPlaylists
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
  )
}
