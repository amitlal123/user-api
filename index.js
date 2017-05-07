var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./controllers/middleWare.js');
var mainCtrl = require('./controllers/mainCtrl.js');

const port = 8889;

var app = express();
app.use(bodyParser.json());
app.use(middleWare.addHeaders);
app.use(middleWare.verifyUser);


app.get('/secrets/:sdfl/:sdfkjsf', middleWare.verifyUser, mainCel)

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
// console.log("Getting into getName");

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getCurrentOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesbyType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilybyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantByName);
