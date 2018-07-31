import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import theme from '../../common/formTheme';

const Login = ({ handleSubmit, mail, password, onChangeMail, onChangePassword, mailIsValid, passwordIsValid }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <Paper>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <InputLabel htmlFor="custom-css-input-mail">
                            Mail
                        </InputLabel>
                        <Input
                            id="custom-css-input-mail"
                            error={!mailIsValid}
                            value={mail}
                            onChange={onChangeMail} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="custom-css-input-pass">
                            Password
                        </InputLabel>
                        <Input
                            id="custom-css-input-pass"
                            type="password"
                            error={!passwordIsValid}
                            value={password}
                            onChange={onChangePassword} />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">Отправить</Button>
                </form>
                <div>
                    <p>{mail}</p>
                    <p>{password}</p>
                </div>
            </Paper>
        </MuiThemeProvider>
    );
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    mail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeMail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    mailIsValid: PropTypes.bool.isRequired,
    passwordIsValid: PropTypes.bool.isRequired
}
export default Login;