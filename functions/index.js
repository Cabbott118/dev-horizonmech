const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
app.use(cors());

const {
  loginUser,
  signUpUser,
  getUserDetails,
  updateUserDetails,
  uploadProfilePhoto,
} = require('./api/users');

const { getEmployeeDetails } = require('./api/employees');

const auth = require('./util/auth');

// User Routes
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/employees', getEmployeeDetails);

exports.api = functions.https.onRequest(app);
