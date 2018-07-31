import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AlarmIcon from '@material-ui/icons/Alarm';
import HelpIcon from '@material-ui/icons/Help';
import PropTypes from 'prop-types';
import '../../App.css';
import logo from '../../logo.svg';
import styles from './style';

const Menu = ({ classes, urls }) => {
    let urlActiveTab = urls.indexOf(window.location.hash);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Paper>
                <Tabs className={classes.tabs}
                    value={urlActiveTab === -1 ? false : urlActiveTab}
                    fullWidth
                    indicatorColor="secondary"
                    textColor="secondary">
                    <Tab icon={<HelpIcon />} label="О нас" href="#/about" />
                    <Tab icon={<AlarmIcon />} label="Счетчики" href="#/counters" />
                </Tabs>
            </Paper>
        </div>
    );
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    urls: PropTypes.array.isRequired
}

export default withStyles(styles)(Menu);
