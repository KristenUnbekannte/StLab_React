import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { urls } from '../../constants/urls';
import styles from './style';

const Menu = ({ classes }) => {
	let urlActiveTab = urls
		.map(item => {
			return item.url;
		})
		.indexOf(window.location.hash);
	return (
		<Paper>
			<Tabs
				className={classes.tabs}
				value={urlActiveTab === -1 ? false : urlActiveTab}
				fullWidth
				indicatorColor="secondary"
				textColor="secondary"
			>
				{urls.map((item, i) => {
					return (
						<Tab
							className={classes.tab}
							key={i}
							icon={item.picture}
							label={item.name}
							href={item.url}
						/>
					);
				})}
			</Tabs>
		</Paper>
	);
};

Menu.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
