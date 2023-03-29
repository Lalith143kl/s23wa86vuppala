var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
  //res.render('computation', { title: 'Maheshwar Punyam Anand' });
  
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.acosh(x);
let y2=Math.log1p(y);
let y3=Math.tan(x);
  res.send('Math.acosh() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.log1p() applied to '+y+' is '+y2+"<br>"+'Math.tan()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.acosh(x);
  let y2=Math.log1p(x);
  let y3=Math.tan(x);

  res.send('Math.acosh() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.log1p() applied to '+y+' is '+y2+"<br>"+'Math.tan()  applied to '+x+' is'+y3);
}
});

module.exports = router;