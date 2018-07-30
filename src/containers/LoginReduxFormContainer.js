import React from 'react'
import LoginReduxForm from '../views/LoginReduxForm';
import Menu from '../containers/MenuContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMail, changePassword } from '../actions/LoginReduxActions';
import { validateMail, validatePassword } from '../helpers/FormValidation';

class LoginReduxContainer extends React.Component {
    submit = values => {
        console.log(values);
        this.props.changeMail(values.mail);
        this.props.changePassword(values.password);
        this.props.history.push(`${this.props.history.location.pathname}/success`);
    }
    validateValues = values => {
        const errors = {}
        if (!validateMail(values.mail)) {
            errors.mail = 'Invalid email address'
        }
        if (!values.password || !validatePassword(values.password)) {
            errors.password = 'Invalid password'
        }
        return errors;
    }
    render() {
        let { mail, password } = this.props.formState.values ? this.props.formState.values : "";
        return (
            <div>
                <Menu />
                <LoginReduxForm
                    onSubmit={this.submit}
                    mail={mail}
                    password={password}
                    validate={this.validateValues} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        formState: { ...state.form.login },
        state: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: bindActionCreators(changePassword, dispatch),
        changeMail: bindActionCreators(changeMail, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);