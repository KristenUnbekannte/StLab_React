import React from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import HelpIcon from '@material-ui/icons/Help';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export const urls = [
	{
		name: 'О нас',
		url: '#/about',
		picture: <HelpIcon />,
	},
	{
		name: 'Счетчики',
		url: '#/counters',
		picture: <AlarmIcon />,
	},
	{
		name: 'Войти',
		url: '#/login',
		picture: <PersonPinIcon />,
	},
	{
		name: 'Войти с помощью redux',
		url: '#/login-redux',
		picture: <PersonPinIcon />,
	},
	{
		name: 'Войти с помощью redux-form',
		url: '#/login-redux-form',
		picture: <PersonPinIcon />,
	},
];
