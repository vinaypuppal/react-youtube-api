var path = require('path');
var express = require('express');

var app = express();

var port = process.env.PORT || process.env.app_port || 8080;
var host = process.env.app_host || '127.0.0.1';

app.use('/dist',express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Web server running at http://' + host + ':' + port);
});
