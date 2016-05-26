var path = require('path');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use('/dist',express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://127.0.0.1:'+port);
});
