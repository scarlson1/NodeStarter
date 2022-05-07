const passport = require('passport');
const express = require('express');

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
// router.get('/auth/google', (req, res) => {
//   console.log('/auth/google route');
//   res.send({});
// });

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/blogs');
  }
);

router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;

// module.exports = app => {
//   app.get(
//     '/auth/google',
//     passport.authenticate('google', {
//       scope: ['profile', 'email']
//     })
//   );

//   app.get(
//     '/auth/google/callback',
//     passport.authenticate('google'),
//     (req, res) => {
//       res.redirect('/blogs');
//     }
//   );

//   app.get('/auth/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
//   });

//   app.get('/api/current_user', (req, res) => {
//     res.send(req.user);
//   });
// };
