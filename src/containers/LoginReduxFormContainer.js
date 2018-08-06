import React from 'react';
import LoginReduxForm from '../views/LoginReduxForm';
import Layout from '../common/Layout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form';
import {
	changeReduxFormField,
	loginReduxFormSuccess,
} from '../actions/LoginReduxActions';
import { validateMail, validatePassword } from '../common/FormValidation';

class LoginReduxFormContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateValues = this.validateValues.bind(this);
	}
	handleSubmit(values) {
		this.props.changeField('mail', values.mail);
		this.props.changeField('password', values.password);
		this.props.loginSuccess();
		this.props.history.push(`${this.props.history.location.pathname}/success`);
	}
	validateValues(values) {
		const errors = {};
		if (!validateMail(values.mail)) {
			errors.mail = true;
		}
		if (!values.password || !validatePassword(values.password)) {
			errors.password = true;
		}
		return errors;
	}
	render() {
		return (
			<Layout>
				<LoginReduxForm
					onSubmit={this.handleSubmit}
					mail={this.props.mail}
					password={this.props.password}
					validate={this.validateValues}
				/>
			</Layout>
		);
	}
}

LoginReduxFormContainer.propTypes = {
	mail: PropTypes.string,
	password: PropTypes.string,
	changeField: PropTypes.func.isRequired,
	loginSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		...formValueSelector('login')(state, 'mail', 'password'),
	};
};
const mapDispatchToProps = dispatch => {
	return {
		changeField: bindActionCreators(changeReduxFormField, dispatch),
		loginSuccess: bindActionCreators(loginReduxFormSuccess, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginReduxFormContainer);
