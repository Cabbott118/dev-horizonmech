export default {
  palette: {
    primary: {
      main: '#dd723c',
      // main: '#1b1c2c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3e5879',
      // main: '#5d5c61',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    homePage: {
      // background: `url('/images/img-12.jpg') center center/cover no-repeat`,
      // boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
      minHeight: '100vh',
      backgroundImage:
        'linear-gradient(to top, #040308, #ad4a28, #dd723c, #fc7001, #dcb697, #9ba5ae, #3e5879, #020b1a)',
    },
    registerPage: {
      background: '#9ba5ae',
      padding: '60px',
      minHeight: '100vh',
    },
    loginPage: {
      background: '#9ba5ae',
      padding: '60px',
      minHeight: '100vh',
    },
    dashboardPage: {
      background: '#9ba5ae',
      padding: '60px',
      minHeight: '100vh',
    },
    fourOhFourPage: {
      // background: '#2a262c',
      background: '#9ba5ae',
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
