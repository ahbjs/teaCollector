const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
const User = require("../model/user.model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/getUserByEmail', async (req, res) => {
  var email = req.body.email;
  var psw = req.body.psw;
  User.findOne({email:email}, async function (err, data) {
      if (err){
          console.log(err);
      }
      else{
        if(data.password === psw){
          res.json({role:data.role});
        }else{
          res.json({role:"-1"});
        }
          console.log(data);
      }
  });
});

module.exports = router;
