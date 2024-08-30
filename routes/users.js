var express = require('express');
var router = express.Router();
const userschema = require("../model/userschema")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Register' });
});

router.post('/signup', async function(req, res, next) {
  const newUser = await userschema(req.body);
  newUser.save();
  res.redirect("/");
});
module.exports = router;
