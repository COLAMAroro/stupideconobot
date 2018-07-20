var request = require('request');
var utip = require('../models/utip');
var Utils = require('../utils');

var utipRequest = function () {
  request({
    url: utip.url
  }, (error, response, body) => {
    var text = body.split("class=\"list-unstyled\"")[1].split("class=\"or-container tiplink-blocks\"")[0].replace(/\s/g,'').split("target");
    var part1 = text[0];
    var part2 = text[2];
    var regex1 = RegExp('[^0-9,]*([0-9,]+)€','g');
    var regex2 = RegExp('[^0-9,]*([0-9,]+)€','g');
    var found =  Number(regex1.exec(part1)[1].replace(/,/g, '.'));
    var goal =  Number(regex2.exec(part2)[1].replace(/,/g, '.'));
    if (found != utip.found) {
      utip.found = found;
    }
    if (goal != utip.goal) {
      utip.goal = goal;
    }
  })
  
}
module.exports = utipRequest;