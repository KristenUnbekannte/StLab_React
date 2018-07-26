import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const Login = ({ classes, handleSubmit, mail, password, onChangeMail, onChangePass, mailError, passwordError }) => {
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
                    classes={{
                        underline: classes.cssUnderline,
                    }}
                    className={mailError ? classes.input : classes.input_error}
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
                    classes={{
                        underline: classes.cssUnderline,
                    }}
                    className={passwordError ? classes.input : classes.input_error}
                    id="custom-css-input-pass"
                    type="password" value={password} onChange={onChangePass}
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
    handleSubmit: PropTypes.func,
    mail: PropTypes.string,
    password: PropTypes.string,
    onChangeMail: PropTypes.func,
    onChangePass: PropTypes.func,
    mailError: PropTypes.bool,
    passwordError: PropTypes.bool
}
export default withStyles(styles)(Login);