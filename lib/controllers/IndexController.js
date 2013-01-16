var sys = require('sys'),
    express = require('express');

exports.bind = function(app){
  app.get('/?', function(req, res, next){  
    res.render('index');
  });
  
  app.get('/index.html', function(req, res, next){  
    res.render('index');
  });
}



