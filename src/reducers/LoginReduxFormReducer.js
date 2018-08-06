import actionTypes from "../actions/actionTypes";

const initialState = {
  mail: "",
  password: "",
  isAutorized: false
};

const loginReduxFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_REDUX_FORM_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case actionTypes.LOGIN_REDUX_FORM_SUCCESS:
      return {
        ...state,
        isAutorized: true
      };
    default:
      return state;
  }
};
export default loginReduxFormReducer;
