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
let y1=Math.atan(x);
let y2=Math.exp(y);
let y3=Math.expm1(x);
  res.send('Math.atan() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.exp() applied to '+y+' is '+y2+"<br>"+'Math.expm1()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.atan(x);
  let y2=Math.exp(x);
  let y3=Math.expm1(x);

  res.send('Math.atan() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.exp() applied to '+y+' is '+y2+"<br>"+'Math.expm1()  applied to '+x+' is'+y3);
}
});

module.exports = router;