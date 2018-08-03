import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({
  isAutorized,
  isReduxFormAutorized,
  ...props
}) => {
  if (props.path === "/login-redux/success") {
    return isAutorized ? <Route {...props} /> : <Redirect to={props.redirect} />;
  } else {
    return isReduxFormAutorized ? <Route {...props} />: <Redirect to={props.redirect} />
  }
};

const mapStateToProps = state => {
  return {
    isAutorized: state.login.isAutorized,
    isReduxFormAutorized: state.loginReduxForm.isAutorized
  };
};

export default connect(mapStateToProps)(PrivateRoute);
