var crypto = require('crypto'),
  fs = require("fs"),
  path = require('path');

exports.privateKey = fs.readFileSync('/etc/letsencrypt/live/api.mobradio.com.br/privkey.pem').toString();
exports.certificate = fs.readFileSync('/etc/letsencrypt/live/api.mobradio.com.br/cert.pem').toString();

exports.credentials = crypto.createCredentials({
  key: exports.privateKey,
  cert: exports.certificate
});