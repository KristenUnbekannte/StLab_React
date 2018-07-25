import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import Menu from '../../views/Menu/index';
import PropTypes from 'prop-types';

const About = ({ classes }) => {
    return <div>
        <Menu about={true} />
        <div className={classes.text}>
            <p>iTechArt Group – это команда Remarkable People,профессионалов в сфере разработки,
            тестирования, сервисной поддержки программных продуктов,модернизации и интеграции
                бизнес-приложений.</p>
            <p>Мы страстно любим дело, которым занимаемся, и стремимся к совершенству
                в решении любых задач.</p>
            <p>Сегодня наша команда – более 1000 высококлассных специалистов.Центры разработки находятся
                 в Республике Беларусь, головной офис и отдел развития бизнеса – в Нью-Йорке и Атланте, США.</p></div>
    </div>
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(About);