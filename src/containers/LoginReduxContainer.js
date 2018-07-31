import React from 'react';
import Login from '../views/Login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeMail, changePassword, validateMail, validatePassword, resetFields } from '../actions/LoginReduxActions';

class LoginReduxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.props.resetFields();
    }
    onChangeMail(event) {
        let mail = event.target.value;
        this.props.changeMail(mail);
        this.props.validateMail(mail);
    }
    onChangePassword(event) {
        let password = event.target.value;
        this.props.changePassword(password);
        this.props.validatePassword(password);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { mailIsValid, passwordIsValid } = this.props.state;
        if (mailIsValid && passwordIsValid) {
            this.props.history.push(`${this.props.history.location.pathname}/success`);
        }

    }
    render() {
        return (
            <Login handleSubmit={this.handleSubmit}
                onChangeMail={this.onChangeMail}
                onChangePassword={this.onChangePassword}
                mail={this.props.state.mail}
                password={this.props.state.password}
                mailIsValid={this.props.state.mailIsValid}
                passwordIsValid={this.props.state.passwordIsValid}
            />
        );
    }
}

const mapStateToProps = state => {
    return { state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: bindActionCreators(changePassword, dispatch),
        changeMail: bindActionCreators(changeMail, dispatch),
        validatePassword: bindActionCreators(validatePassword, dispatch),
        validateMail: bindActionCreators(validateMail, dispatch),
        resetFields: bindActionCreators(resetFields, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);