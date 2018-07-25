import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AlarmIcon from '@material-ui/icons/Alarm';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import App from '../../App';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import PropTypes from 'prop-types';

const Menu = ({ classes, about, counters }) => {
    return (<Paper>
        <App />
        <Tabs className={classes.tabs}
            value={about ? 0 : counters ? 1 : -1}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"> */}
            <Link to="/about" className={classes.link}><Tab icon={<PersonPinIcon />} label="О нас" /></Link>
            <Link to="/counters" className={classes.link}><Tab icon={<AlarmIcon />} label="Счетчики" /></Link>
        </Tabs>
    </Paper>
    )
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    about: PropTypes.bool,
    counters: PropTypes.bool
}

export default withStyles(styles)(Menu);


