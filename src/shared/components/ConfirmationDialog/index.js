import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { any, bool, string, func } from 'prop-types'

function ConfirmationDialog({ title, children, open, setOpen, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false)
            onConfirm()
          }}
        >
          Confirm
        </Button>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

ConfirmationDialog.propTypes = {
  title: string,
  children: any,
  open: bool,
  setOpen: func,
  onConfirm: func,
}

export default ConfirmationDialog
