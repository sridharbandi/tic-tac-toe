import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const scorecard = (props) => {

    const {open, onClose} = props

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Score here</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                    >
                    <CloseIcon/>
                </IconButton>,
            ]}
        />
    );
}

export default scorecard;