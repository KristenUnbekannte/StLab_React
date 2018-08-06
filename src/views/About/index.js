import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import Layout from "../../common/Layout";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import styles from "./style";

const About = ({ classes }) => {
  return (
    <Layout>
      <section className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">iTechArt Group</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary="iTechArt Group – это команда Remarkable People,профессионалов в сфере разработки,
            тестирования, сервисной поддержки программных продуктов,модернизации и интеграции
                бизнес-приложений."
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary="Мы страстно любим дело, которым занимаемся, и стремимся к совершенству
                в решении любых задач."
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary="Сегодня наша команда – более 1000 высококлассных специалистов.Центры разработки находятся
                 в Республике Беларусь, головной офис и отдел развития бизнеса – в Нью-Йорке и Атланте, США."
            />
          </ListItem>
        </List>
      </section>
    </Layout>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(About);
