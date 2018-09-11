function tryToCallFunction(event, source) {
  if (!event.item || !event.item.itemMeta)
    return;
  var itemName = event.item.itemMeta.displayName;
  if(!itemName)
    return;

  var d = new Drone(event.player.location);
  echo(event.player, "trying to call: " + itemName);
  if(itemName.startsWith("js.")) {
    var functionName = itemName.substring(".js".length);
    echo(event.player, "Call function with name = " + functionName);
    if(typeof this[functionName] === 'function') {
      this.self = event.player;
      this[functionName].call(this);
      delete this.self;
    } else {
      echo(event.player, "Function with name = " + itemName + " does not exist");
    }
  }
}

events.playerInteract(function(e) {
  tryToCallFunction(e, "playerInteract");
});

