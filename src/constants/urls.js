import React from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import HelpIcon from '@material-ui/icons/Help';

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
	}
];
