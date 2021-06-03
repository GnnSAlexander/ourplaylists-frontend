import { makeStyles, LinearProgress } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: 99999,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

export const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  )
}
