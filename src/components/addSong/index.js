import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import {
  Checkbox,
  DialogContent,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core"
import ourplaylist from "../../services/ourplaylist"
import { useSnackbar } from "notistack"

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

const initialState = {
  title: "",
  image: "",
  isPublic: true,
}

export default function AddSong() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [formvalues, setFormvalues] = React.useState(initialState)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleInputChange = (event) => {
    const elem = event

    switch (event.target.type) {
      default:
        throw new Error("No esta configurado")
    }
  }

  const handleSubmit = () => {}

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Fab
        color="primary"
        className={classes.fab}
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
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
              Create Playlist
            </Typography>
            <Button type="" autoFocus color="inherit" onClick={handleSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextField
                id="title"
                label="Title"
                value={formvalues.title}
                name="title"
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="image"
                label="Image src"
                value={formvalues.image}
                onChange={handleInputChange}
                name="image"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={formvalues.isPublic}
                    onChange={handleInputChange}
                    name="isPublic"
                  />
                }
                label="Is Public"
                labelPlacement="start"
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
