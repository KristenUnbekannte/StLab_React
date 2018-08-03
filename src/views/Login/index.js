import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
	Paper,
	Button,
	FormControl,
	Input,
	InputLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import theme from './theme';

const Login = ({
	handleSubmit,
	mail,
	password,
	onChangeField,
	mailIsValid,
	passwordIsValid,
}) => {
	return (
		<MuiThemeProvider theme={theme}>
			<Paper>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<InputLabel htmlFor="mail">Mail</InputLabel>
						<Input
							id="mail"
							error={!mailIsValid && mail !== ''}
							value={mail}
							onChange={onChangeField}
						/>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input
							id="password"
							type="password"
							error={!passwordIsValid && password !== ''}
							value={password}
							onChange={onChangeField}
						/>
					</FormControl>
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

Login.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	mail: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onChangeField: PropTypes.func.isRequired,
	mailIsValid: PropTypes.bool.isRequired,
	passwordIsValid: PropTypes.bool.isRequired,
};
export default Login;
