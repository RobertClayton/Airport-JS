function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var planeIndex = this.planes.indexOf(plane);
  this.planes.splice(planeIndex, 1);
};
