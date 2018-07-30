import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './style';

const Login = ({ classes, handleSubmit, mail, password, onChangeMail, onChangePassword, mailIsValid, passwordIsValid }) => {
    return <Paper className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl className={classes.margin}>
                <InputLabel
                    FormLabelClasses={{
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    }}
                    htmlFor="custom-css-input-mail"
                >
                    Mail
                </InputLabel>
                <Input
                    error={!mailIsValid}
                    classes={{
                        underline: classes.cssUnderline,
                    }}
                    className={classes.input}
                    id="custom-css-input-mail"
                    value={mail} onChange={onChangeMail}
                />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel
                    FormLabelClasses={{
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    }}
                    htmlFor="custom-css-input-pass"
                >
                    Password
                </InputLabel>
                <Input
                    error={!passwordIsValid}
                    classes={{
                        underline: classes.cssUnderline,
                    }}
                    className={classes.input}
                    id="custom-css-input-pass"
                    type="password" value={password} onChange={onChangePassword}
                />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Отправить
            </Button>
        </form>
        <div>
            <p>{mail}</p>
            <p>{password}</p>
        </div>
    </Paper>
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    mail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeMail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    mailIsValid: PropTypes.bool.isRequired,
    passwordIsValid: PropTypes.bool.isRequired
}
export default withStyles(styles)(Login);