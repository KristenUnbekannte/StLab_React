import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./style";

const Counter = ({
  onClickResetCount,
  onClickIncreaseCount,
  onClickDecreaseCount,
  count,
  classes
}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={onClickIncreaseCount}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          increment
        </Button>
        <Button
          onClick={onClickResetCount}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          reset
        </Button>
        <Button
          onClick={onClickDecreaseCount}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          decrement
        </Button>
      </CardActions>
    </Card>
  );
};

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickResetCount: PropTypes.func.isRequired,
  onClickIncreaseCount: PropTypes.func.isRequired,
  onClickDecreaseCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};
export default withStyles(styles)(Counter);
