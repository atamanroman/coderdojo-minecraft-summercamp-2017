var _hochhaus = require('roman/hochhaus');

function hochhaus(etagen) {

  if(etagen === undefined) {
    etagen = 10;
  }

  _hochhaus(self.location, etagen, self);
}

exports.hochhaus = hochhaus;
