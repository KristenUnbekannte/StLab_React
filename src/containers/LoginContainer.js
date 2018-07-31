import React from 'react';
import Login from '../views/Login';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mail: "", password: "", mailIsValid: true, passwordIsValid: true };

        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeMail(event) {
        let mail = event.target.value;
        this.setState({ mail });
    }
    onChangePassword(event) {
        let password = event.target.value;
        this.setState({ password });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { mail, password } = this.state;

        let mailIsValid = this.validateMail(mail);
        let passwordIsValid = this.validatePassword(password);

        if (mailIsValid && passwordIsValid) {
            console.log(`Mail: ${mail}\nPassword: ${password}`);
            alert(JSON.stringify({ mail: mail, password: password }));

            this.setState({ mail: "", password: "", mailIsValid: true, passwordIsValid: true });
        }
        else {
            this.setState({ mailIsValid, passwordIsValid });
        }
    }
    validateMail(mail) {
        const pattern = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
        return pattern.test(mail);
    }
    validatePassword(password) {
        return password.length > 5;
    }
    render() {
        return (
                <Login handleSubmit={this.handleSubmit}
                    onChangeMail={this.onChangeMail}
                    onChangePassword={this.onChangePassword}
                    mail={this.state.mail}
                    password={this.state.password}
                    mailIsValid={this.state.mailIsValid}
                    passwordIsValid={this.state.passwordIsValid}
                />
        );
    }
}
export default LoginContainer;