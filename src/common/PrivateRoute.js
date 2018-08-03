import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({ isAutorized, ...props }) => {
  return isAutorized ? <Route {...props} /> : <Redirect to={props.redirect} />;
};

const mapStateToProps = state => {
  return {
    isAutorized: state.login.isAutorized,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
