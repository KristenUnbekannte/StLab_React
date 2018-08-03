import React from "react";
import { Field, reduxForm } from "redux-form";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import theme from "./theme";
import renderField from './renderField';

let LoginReduxForm = ({ handleSubmit, mail, password }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Field name="mail" component={renderField} type="text" label="Mail" />
          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </form>
        <div>
          <p>{mail}</p>
          <p>{password}</p>
        </div>
      </Paper>
    </MuiThemeProvider>
  );
};

LoginReduxForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mail: PropTypes.string,
  password: PropTypes.string
};

LoginReduxForm = reduxForm({
  form: "login"
})(LoginReduxForm);

export default LoginReduxForm;
