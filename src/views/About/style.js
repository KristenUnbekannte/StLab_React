export default theme => ({
    root: {
      width: '100%',
      maxWidth: '700px',
      backgroundColor: theme.palette.background.paper,
      margin: 'auto'
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });