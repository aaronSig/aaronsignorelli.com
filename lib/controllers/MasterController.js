var express = require('express'),
    path  = require('path');

var indexController = require('./IndexController');

var loaded = false;

exports.startup = function(){

  var app = express.createServer();

  app.set('views', path.resolve(__dirname, '../', 'views'));
  app.set('view engine', 'ejs');
  app.set("view options", { layout: false })
  app.use(express.static(path.resolve(__dirname, '../', 'public')));
  app.use(express.cookieParser());

  //Bind all the controllers here
  indexController.bind(app);

  console.log("starting server on port " + (process.env.PORT || 3000));
  app.listen(process.env.PORT || 3000);
  console.log("server started " + (process.env.PORT || 3000));

}




