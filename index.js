var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, 'public/assets/images/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
