var utils = require('utils');

function blockBricht(event) {

  var blockLocation = event.block.location;
  var blockX = blockLocation.x;
  var blockY = blockLocation.y;
  var blockZ = blockLocation.z;

  // (x/y/z)
  var pos = "(" + blockX + "/" + blockY + "/" + blockZ + ")";
  // echo(event.player, "Block bricht an " + pos);

  utils.players(function(player){
    if (player !== event.player)
      echo(player, "Spieler "+ event.player.name + " bricht block an " + pos);
    else
      echo(event.player, "Du brichst block an " + pos);
  });
}

events.blockBreak(blockBricht);
