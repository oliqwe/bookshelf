import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    position: 'relative',
  },
})

function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.overlay}>
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loading
