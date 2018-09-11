function onJoin(event) {
  greet(event.player);
}

events.playerJoin(onJoin);
