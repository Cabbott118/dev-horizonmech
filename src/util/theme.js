export default {
  palette: {
    primary: {
      // main: '#ce7869',
      main: '#1b1c2c',
      contrastText: '#fff',
    },
    secondary: {
      // main: '#5e8d93',
      main: '#5d5c61',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    homePage: {
      // background: `url('/images/img-12.jpg') center center/cover no-repeat`,
      // boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(180deg, #5085a5, #f7f9fb)',
    },
    dashboardPage: {
      background: '#2a262c',
      minHeight: '100vh',
    },
    fourOhFourPage: {
      // background: '#eceff1',
      background: '#2a262c',
      minHeight: '100vh',
    },
    typography: {
      useNextVariants: true,
    },
    paper: {
      padding: 20,
    },
    form: {
      textAlign: 'center',
    },
    pageTitle: {
      margin: '10px auto 10px auto',
    },
    textField: {
      margin: '10px auto 10px auto',
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: 'relative',
      textTransform: 'none',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 5,
    },
    progress: {
      position: 'absolute',
    },
  },
};
