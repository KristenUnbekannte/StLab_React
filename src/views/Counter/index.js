import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from './style';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Counter = ({ reset, increase, decrease, count, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={increase} variant="contained" color="primary" className={classes.button}>
          increment
      </Button>
        <Button onClick={reset} variant="contained" color="secondary" className={classes.button}>
          reset
      </Button>
        <Button onClick={decrease} variant="contained" color="primary" className={classes.button}>
          decrement
      </Button>
      </CardActions>
    </Card>
  );
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
  reset: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  count: PropTypes.number
}
export default withStyles(styles)(Counter);