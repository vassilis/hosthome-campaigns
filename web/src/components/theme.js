import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        maxWidth: [1200, '!important'],
      },
    },
  },
  palette: {
    primary: { main: '#C1433B', light: '#F7925A' },
    secondary: { main: '#55174D' },
  },
});

export default theme;
