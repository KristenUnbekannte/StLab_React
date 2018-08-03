import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Layout from '../common/Layout';
import * as actions from '../actions/LoginReduxActions';
import Login from '../views/Login';

class LoginReduxContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		this.onChangeField = this.onChangeField.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.props.resetFields();
	}
	onChangeField(event) {
		const field = event.target.id;
    const value = event.target.value;

		this.props.changeField(field, value);
		this.props.validateField(field, value);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { mailIsValid, passwordIsValid } = this.props;

		if (mailIsValid && passwordIsValid) {
			this.props.loginSuccess();
			this.props.history.push(
				`${this.props.history.location.pathname}/success`);
    } 
    else {
			this.props.loginFail();
		}
	}
	render() {
		return (
			<Layout>
				<Login
					handleSubmit={this.handleSubmit}
					onChangeField={this.onChangeField}
					mail={this.props.mail}
					password={this.props.password}
					mailIsValid={this.props.mailIsValid}
					passwordIsValid={this.props.passwordIsValid}
				/>
			</Layout>
		);
	}
}

LoginReduxContainer.propTypes = {
	mail: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	mailIsValid: PropTypes.bool.isRequired,
	passwordIsValid: PropTypes.bool.isRequired,
	changeField: PropTypes.func.isRequired,
	loginSuccess: PropTypes.func.isRequired,
	validateField: PropTypes.func.isRequired,
	resetFields: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return { ...state.login };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginReduxContainer);
