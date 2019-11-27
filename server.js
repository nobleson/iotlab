var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');
var router = express.Router();
const bodyParser = require('body-parser');

var path = __dirname + '/public/';
app.use(bodyParser.urlencoded({ extended: true,limit: '100mb' })); 
app.use(bodyParser.json({ limit: '100mb' }));

app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Credentials",true);     
res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");     
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
    }); 

app.use('/public/',express.static(__dirname+ '/public/'));
app.use('/public/assets/images/',express.static(__dirname+ '/public/assets/images/'));
app.use('/public/view/',express.static(__dirname+ '/public/view/'));
app.use('/public/view/css/',express.static(__dirname+ '/public/view/css/'));
app.use('/public/view/js/',express.static(__dirname+ '/public/view/js/'));
app.use('/public/view/js/custom/',express.static(__dirname+ '/public/view/js/custom/'));
app.use('/public/view/data/',express.static(__dirname+ '/public/view/data/'));
app.use('/public/view/fonts/',express.static(__dirname+ '/public/view/fonts/'));
app.use('/public/view/icons-reference/fonts/',express.static(__dirname+ '/public/view/icons-reference/fonts/'));
app.use('/public/view/img/',express.static(__dirname+ '/public/view/img/'));
app.use('/public/view/img/brand/',express.static(__dirname+ '/public/view/img/brand/'));
app.use('/public/view/img/flags/16/',express.static(__dirname+ '/public/view/img/flags/16/'));
app.use('/public/view/img/photos/',express.static(__dirname+ '/public/view/img/photos/'));
app.use('/public/view/vendor/',express.static(__dirname+ '/public/view/vendor/'));
app.use('/public/view/vendor/bootstrap/css/',express.static(__dirname+ '/public/view/vendor/bootstrap/css/'));
app.use('/public/view/vendor/bootstrap/js/',express.static(__dirname+ '/public/view/vendor/bootstrap/js/'));
app.use('/public/view/vendor/chart/',express.static(__dirname+ '/public/view/vendor/chart/'));
app.use('/public/view/vendor/font-awesome/css/',express.static(__dirname+ '/public/view/vendor/font-awesome/css/'));
app.use('/public/view/vendor/font-awesome/fonts/',express.static(__dirname+ '/public/view/vendor/font-awesome/fonts/'));
app.use('/public/view/vendor/jquery/',express.static(__dirname+ '/public/view/vendor/jquery/'));
app.use('/public/view/vendor/jquery-validation/localization/',express.static(__dirname+ '/public/view/vendor/jquery-validation/localization/'));
app.use('/public/view/vendor/jquery.cookie/',express.static(__dirname+ '/public/view/vendor/jquery.cookie/'));
app.use('/public/view/vendor/popper.js/',express.static(__dirname+ '/public/view/vendor/popper.js/'));
app.use('/public/view/vendor/popper.js/esm/',express.static(__dirname+ '/public/view/vendor/popper.js/esm/'));
app.use('/public/view/vendor/popper.js/umd/',express.static(__dirname+ '/public/view/vendor/popper.js/umd/'));

app.use('/',router);

router.get("/", function(req,res){
	res.sendFile(path + "view/index.html");
})
app.use('/led', require('./route/Led'));

app.listen(3000, function () {
  console.log('Server Started on Port: 3000!')
})
