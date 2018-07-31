import { validateMail, validatePassword } from '../common/FormValidation';

const initialState = {
    mail: "",
    password: "",
    mailIsValid: true,
    passwordIsValid: true
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MAIL':
            return {
                ...state,
                mail: action.mail
            }
        case 'CHANGE_PASSWORD':
            return {
                ...state,
                password: action.password
            }
        case 'VALIDATE_MAIL':
            const mailIsValid = validateMail(action.mail);
            if (mailIsValid) {
                return {
                    ...state,
                    mailIsValid: true
                }
            }
            return {
                ...state,
                mailIsValid: false
            }
        case 'VALIDATE_PASSWORD':
            const validation = validatePassword(action.password);
            if (validation) {
                return {
                    ...state,
                    passwordIsValid: true
                }
            }
            return {
                ...state,
                passwordIsValid: false
            }
        case 'RESET_FIELDS':
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}
export default loginReducer;
