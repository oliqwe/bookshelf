import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ReorderIcon from '@material-ui/icons/Reorder'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '12px',
    marginBottom: theme.spacing(1),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}))

function Navigation() {
  const classes = useStyles()

  return (
    <List component="nav" aria-label="navigation">
      <ListItem
        className={classes.root}
        button
        component={NavLink}
        activeClassName={classes.active}
        exact
        to="/"
      >
        <ListItemIcon>
          <MenuBookRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Books" />
      </ListItem>
      <ListItem
        className={classes.root}
        button
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/shelves"
      >
        <ListItemIcon>
          <ReorderIcon />
        </ListItemIcon>
        <ListItemText primary="Shelves" />
      </ListItem>
    </List>
  )
}

export default Navigation
