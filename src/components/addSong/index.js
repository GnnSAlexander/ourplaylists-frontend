import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import QueueMusicIcon from "@material-ui/icons/QueueMusic"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import { DialogContent, Grid } from "@material-ui/core"
import ourplaylist from "../../services/ourplaylist"
import { useSnackbar } from "notistack"
import { SearchVideo } from "../searchVideo"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  dialogContent: {
    padding: 24,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AddSong({ playlist_title, reloadSongs }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleSubmit = useCallback(
    (song) => {
      ourplaylist
        .addSong(song)
        .then((res) => {
          if (res?.error) {
            enqueueSnackbar(res.error, { variant: "error" })
            return
          }
          enqueueSnackbar(`${song.title} was added`, { variant: "success" })
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }))
    },
    [enqueueSnackbar]
  )

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    reloadSongs({})
  }

  return (
    <div>
      <IconButton
        aria-label="Add song"
        color="primary"
        onClick={handleClickOpen}
      >
        <QueueMusicIcon fontSize="large" color="secondary" />
      </IconButton>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add Songs in {playlist_title} playlist
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2}>
            <SearchVideo addSong={handleSubmit} />
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
