var mod_hochhaus2 = require("roman/mod_hochhaus2");

function hochhaus2(etagen) {

  // wenn keine Etagen angegeben, dann Etagen = 10
  if (etagen === undefined) {
    etagen = 10;
  }

  mod_hochhaus2(self.location, etagen);

}

exports.hochhaus2 = hochhaus2;
