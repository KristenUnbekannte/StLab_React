import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './style';

const LoginSuccess = ({ classes, mail, password }) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="headline" component="h3">
        Mail: {mail}
      </Typography>
      <Typography component="p">
        Password: {password}
      </Typography>
    </Paper>
  );
}

LoginSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
  mail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    mail: state.login.mail,
    password: state.login.password
  }
};

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));