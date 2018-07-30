import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Menu from '../../containers/MenuContainer';
import styles from './style';

const LoginSuccess = ({ classes, mail, password }) => {
  return (
    <div>
      <Menu />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Mail: {mail}
        </Typography>
        <Typography component="p">
          Password: {password}
        </Typography>
      </Paper>
    </div>
  );
}

LoginSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
  mail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    mail: state.mail,
    password: state.password
  }
};

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));