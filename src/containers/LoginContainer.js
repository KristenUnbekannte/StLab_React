import React from 'react';
import Menu from '../views/Menu/index';
import Login from '../views/Login/index';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mail: "", password: "", mailIsValid: true, passwordIsValid: true };

        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeMail(e) {
        var val = e.target.value;
        this.setState({ mail: val });
    }
    onChangePass(e) {
        var val = e.target.value;
        this.setState({ password: val });
    }

    handleSubmit(e) {
        e.preventDefault();
        let mailIsValid = this.validateMail(this.state.mail);
        let passIsValid = this.validatePassword(this.state.password);

        if (mailIsValid && passIsValid) {
            console.log(`Mail: ${this.state.mail}\nPassword: ${this.state.password}`);
            alert(JSON.stringify({mail: this.state.mail, password: this.state.password}));
            this.setState({ mail: "", password: "", mailIsValid: true, passwordIsValid: true });
        }
        else {
            this.setState({ mailIsValid: mailIsValid, passwordIsValid: passIsValid });
        }
    }
    validateMail(mail) {
        const pattern = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
        return pattern.test(mail);
    }
    validatePassword(pass) {
        return pass.length > 5;
    }
    render() {
        return (
            <div>
                <Menu login={true} />
                <Login handleSubmit={this.handleSubmit}
                    onChangeMail={this.onChangeMail}
                    onChangePass={this.onChangePass}
                    mail={this.state.mail}
                    password={this.state.password}
                    mailError={this.state.mailIsValid}
                    passwordError={this.state.passwordIsValid}
                />
            </div>
        );
    }
}
export default LoginContainer;