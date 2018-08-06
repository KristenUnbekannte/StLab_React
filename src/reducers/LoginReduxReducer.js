import { validateMail, validatePassword } from "../common/FormValidation";
import actionTypes from "../actions/actionTypes";

const initialState = {
  mail: "",
  password: "",
  mailIsValid: false,
  passwordIsValid: false,
  isAutorized: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case actionTypes.VALIDATE_FIELD:
      if (action.field === "mail") {
        return {
          ...state,
          mailIsValid: validateMail(action.value)
        };
      } else if (action.field === "password") {
        return {
          ...state,
          passwordIsValid: validatePassword(action.value)
        };
      }
      return {
        ...state
      };
    case actionTypes.RESET_FIELDS:
      return {
        ...state,
        ...initialState
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAutorized: true
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAutorized: false
      };
    default:
      return state;
  }
};
export default loginReducer;
