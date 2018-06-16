import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Icon from '@material-ui/core/Icon';
import './Modal.css';

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
            <DialogContent className="Dialog">
                <Icon
                    className="Icon"
                    style={{fontSize: 64}}>
                        thumb_up
                </Icon>
                <DialogContentText className="Content">
                    {text}
                </DialogContentText>
            </DialogContent>
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