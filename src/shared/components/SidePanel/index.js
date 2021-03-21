import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

export const useStyles = makeStyles({
  drawerPaper: ({ isOpen, width }) =>
    isOpen && {
      display: 'flex',
      maxWidth: width,
      width: '100%',
    },
  // TODO : remove
  drawer: ({ width }) => ({ width: width, flexShrink: 0 }),
})

const SidePanel = ({ id, isOpen, onClose, fullWidth, width, children }) => {
  const classes = useStyles({ isOpen, fullWidth, width })

  return (
    <Drawer
      id={id}
      open={isOpen}
      onClose={onClose}
      className={classes.drawer}
      classes={{
        root: classes.drawer,
        paper: classes.drawerPaper,
      }}
      transitionDuration={{ enter: 400, exit: 350 }}
      anchor="right"
    >
      <Box m={2}>{children}</Box>
    </Drawer>
  )
}

export default SidePanel
