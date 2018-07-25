import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import App from '../../App';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const ParentCounter = ({ classes,add, del, reset }) => {
    return (
        <div>
            <App />
            <Button onClick={add} variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
            </Button>
            <Button onClick={del} variant="fab" color="secondary" aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>
            <Button onClick={reset} variant="fab" className={classes.button}> <ThreeSixtyIcon className={classes.icon} /></Button>
        </div>
    );
}

ParentCounter.propTypes = {
    classes: PropTypes.object.isRequired,
    add: PropTypes.func,
    del: PropTypes.func,
    reset: PropTypes.func,
};

export default withStyles(styles)(ParentCounter);