import React from 'react';
import { FormControl, Input, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={`custom-css-input-${label}`}>{label}</InputLabel>
      <Input
        error={error && touched}
        {...input}
        type={type}
        id={`custom-css-input-${label}`}
      />
    </FormControl>
  );
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default renderField;
