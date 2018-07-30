export const changeMail = (mail) => {
    return {
        type: 'CHANGE_MAIL',
        mail
    }
}
export const changePassword = (password) => {
    return {
        type: 'CHANGE_PASSWORD',
        password
    }
}
export const validateMail = (mail) => {
    return {
        type: 'VALIDATE_MAIL',
        mail
    }
}
export const validatePassword = (password) => {
    return {
        type: 'VALIDATE_PASSWORD',
        password
    }
}
export const resetFields = () => {
    return {
        type: 'RESET_FIELDS'
    }
}