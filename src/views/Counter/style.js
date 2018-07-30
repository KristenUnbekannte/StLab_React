export default theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  card: {
    maxWidth: 345,
    margin: '20px auto 0 auto',
  },
});

