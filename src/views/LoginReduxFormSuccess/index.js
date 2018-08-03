import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Layout from '../../common/Layout';
import styles from './style';

const LoginSuccess = ({ classes, mail, password }) => {
	return (
		<Layout>
			<Paper className={classes.root} elevation={1}>
				<Typography variant="headline" component="h3">
					Mail: {mail}
				</Typography>
				<Typography component="p">Password: {password}</Typography>
			</Paper>
		</Layout>
	);
};

LoginSuccess.propTypes = {
	classes: PropTypes.object.isRequired,
	mail: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
	return {
		mail: state.loginReduxForm.mail,
		password: state.loginReduxForm.password,
	};
};

export default connect(mapStateToProps)(withStyles(styles)(LoginSuccess));
