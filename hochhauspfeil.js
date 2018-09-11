var utils = require('utils');
var entities = require('entities');
var mod_hochhaus2 = require('roman/mod_hochhaus2');

function baueHochhaus(event) {
  // -> hier anstatt 'rapublic' euren Nickname
  echo(utils.player('rapublic'), "Pfeil!");
  var blockPosi = event.hitBlock.location;
  var etagenZahl = Math.floor((Math.random() * 30) + 10);
  mod_hochhaus2(blockPosi, etagenZahl);
}

events.projectileHit(baueHochhaus);

