import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './style';

const renderField = ({ input, label, type, meta: { touched, error }, classes }) => {
  return (
    <FormControl className={classes.margin}>
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
        htmlFor={`custom-css-input-${label}`}
      >
        {label}
      </InputLabel>
      <Input
        error={error && touched}
        {...input}
        type={type}
        classes={{
          underline: classes.cssUnderline,
        }}
        className={classes.input}
        id={`custom-css-input-${label}`}
      />
    </FormControl>
  )
}

let LoginReduxForm = ({ handleSubmit, mail, password, classes }) => {
  return (
    <Paper className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Field name="mail" component={renderField} classes={classes} type="text" label="Mail" />
        <Field name="password" component={renderField} classes={classes} type="password" label="Password" />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Отправить
        </Button>
      </form>
      <div>
        <p>{mail}</p>
        <p>{password}</p>
      </div>
    </Paper>
  )
}

LoginReduxForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  mail: PropTypes.string,
  password: PropTypes.string
};

LoginReduxForm = reduxForm({
  form: 'login',
})(LoginReduxForm);

export default (withStyles(styles)(LoginReduxForm));