module.exports = {

  addHeaders: function(req, res, next) {
    console.log("Inside Header Set");
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  verifyUser: function(req, res, next) {
    console.log("Inside Verify User");
    if(req.params.user === "Test") {
      next();
    } else {
      res.send(JSON.stringify("Not a valid User"));
    }
  }
}
