import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '320px',
                padding: '20px',
                margin: 'auto'
            }
        },
        MuiInput: {
            root: {
                width: '320px',
                marginBottom: '25px',
            },
            underline: {
                '&:after': {
                    borderBottomColor: '3f51b5'
                },
            },
        },
        MuiButton: {
            root: { width: '100%' }
        }
    }
});

export default theme;