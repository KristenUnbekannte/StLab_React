import React from "react";
import Login from "../views/Login";
import Layout from "../common/Layout";
import { validateMail, validatePassword } from "../common/FormValidation";

class LoginContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      mailIsValid: false,
      passwordIsValid: false
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeField(event) {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { mail, password } = this.state;

    let mailIsValid = validateMail(mail);
    let passwordIsValid = validatePassword(password);

    if (mailIsValid && passwordIsValid) {
      console.log(`Mail: ${mail}\nPassword: ${password}`);
      alert(JSON.stringify({ mail: mail, password: password }));
      this.setState({
        mail: "",
        password: "",
        mailIsValid: false,
        passwordIsValid: false
      });
    } else {
      this.setState({ mailIsValid, passwordIsValid });
    }
  }
  render() {
    return (
      <Layout>
        <Login
          handleSubmit={this.handleSubmit}
          onChangeField={this.onChangeField}
          mail={this.state.mail}
          password={this.state.password}
          mailIsValid={this.state.mailIsValid}
          passwordIsValid={this.state.passwordIsValid}
        />
      </Layout>
    );
  }
}
export default LoginContainer;
