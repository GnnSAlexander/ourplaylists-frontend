import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import useUser from "../../hooks/useUser"

import { useSnackbar } from "notistack"
import ROUTES from "../../routes/ROUTES"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ourplaylist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  hide: {
    display: "none",
  },
}))

export default function LoginPage() {
  const classes = useStyles()
  const [errors, setErrors] = useState({})

  const username = useRef("")
  const password = useRef("")

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const { error, isLogged, loading, login } = useUser()

  const history = useHistory()

  useEffect(() => {
    console.log(isLogged)
    if (isLogged) {
      enqueueSnackbar("success", {
        variant: "success",
      })
      history.push("/dashboard")
    }
  }, [isLogged])

  useEffect(() => {
    error &&
      enqueueSnackbar("wrong credentials", {
        variant: "error",
      })
  }, [error])

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = {}
    if (username.current.value.length < 4)
      errors.username = {
        error: true,
        helperText: "Username must have 4 characters or more",
      }

    if (password.current.value.length === 0)
      errors.password = {
        error: true,
        helperText: "Password is required",
      }
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      login({
        username: username.current.value,
        password: password.current.value,
      })
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputRef={username}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              {...errors?.username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputRef={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...errors?.password}
            />
            <FormControlLabel
              className={classes.hide}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.hide}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={ROUTES.SIGNUP} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
