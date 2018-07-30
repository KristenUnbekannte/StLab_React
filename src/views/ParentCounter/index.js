import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import styles from './style';

const ParentCounter = ({ classes, onClickAddCounter, onClickDeleteCounter, onClickResetCounter }) => {
    return (
        <div>
            <Button onClick={onClickAddCounter} variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
            </Button>
            <Button onClick={onClickDeleteCounter} variant="fab" color="secondary" aria-label="Delete" className={classes.button}>
                <DeleteIcon />
            </Button>
            <Button onClick={onClickResetCounter} variant="fab" className={classes.button}> <ThreeSixtyIcon className={classes.icon} /></Button>
        </div>
    );
}

ParentCounter.propTypes = {
    classes: PropTypes.object.isRequired,
    onClickAddCounter: PropTypes.func.isRequired,
    onClickDeleteCounter: PropTypes.func.isRequired,
    onClickResetCounter: PropTypes.func.isRequired
};

export default withStyles(styles)(ParentCounter);