import actionTypes from './actionTypes';

export const changeField = (field, value) => {
	return {
		type: actionTypes.CHANGE_FIELD,
		field,
		value,
	};
};
export const changeReduxFormField = (field, value) => {
	return {
		type: actionTypes.CHANGE_REDUX_FORM_FIELD,
		field,
		value,
	};
};
export const validateField = (field, value) => {
	return {
		type: actionTypes.VALIDATE_FIELD,
		field,
		value,
	};
};
export const resetFields = () => {
	return {
		type: actionTypes.RESET_FIELDS,
	};
};

export const loginSuccess = () => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
	};
};

export const loginReduxFormSuccess = () => {
	return {
		type: actionTypes.LOGIN_REDUX_FORM_SUCCESS,
	};
};

export const loginFail = () => {
	return {
		type: actionTypes.LOGIN_FAIL,
	};
};
