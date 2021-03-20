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
const auth = require('./util/auth');

// User Routes
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

exports.api = functions.https.onRequest(app);
