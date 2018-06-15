import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const modaldialog = (props) => {

    const { onClose, text } = props

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
            <DialogActions>
                <Button
                    onClick={onClose}
                    color="secondary"
                    autoFocus>
                        REPLAY
                    </Button>
            </DialogActions>
        </Dialog>
    )
}
export default withMobileDialog()(modaldialog);