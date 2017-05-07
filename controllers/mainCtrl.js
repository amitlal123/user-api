var user = require('../user.js');
module.exports = {
  getName : function(req, res, next) {
    // console.log("Inside getName");
    res.send(JSON.stringify(user.name));
  },

  getLocation : function(req, res, next) {
    res.send(JSON.stringify(user.location));
  },

  getOccupations : function(req, res, next) {
    if(req.query && req.query.order) {
      var order = req.query.order;
      if(order === 'asc') {
        res.send(JSON.stringify(user.occupations.sort()));
      } else {
        res.send(JSON.stringify((user.occupations.sort()).reverse()));
      }
    } else {
    res.send(JSON.stringify(user.occupations));
    }
  },

  getCurrentOccupation : function(req, res, next) {
    var currentOccupation = user.occupations.slice(user.occupations.length -1);
    res.send(JSON.stringify(currentOccupation));
  },

  getHobbies : function(req, res, next) {
    res.send(JSON.stringify(user.hobbies));
  },

  getHobbiesbyType : function(req, res, next) {
    var type = req.params.type;
    var hobbies = user.hobbies.filter(function(hobby){
      return (hobby.type === type);
    });
    res.send(JSON.stringify(hobbies));
  },

  getFamily : function(req, res, next) {
    res.send(JSON.stringify(user.family));
  },

  getFamilybyGender : function(req, res, next) {
    var gender = req.params.gender;
    var members = user.family.filter(function(member){
      return (member.gender === gender);
    });
    res.send(JSON.stringify(members));
  },

  getRestaurants : function(req, res, next) {
    res.send(JSON.stringify(user.restaurants));
  },

  getRestaurantByName : function(req, res, next) {
    var name = req.params.name;
    var restaurant = user.restaurants.filter(function(restaurant){
      return (restaurant.name === name);
    });
    res.send(JSON.stringify(restaurant));
  }
}
