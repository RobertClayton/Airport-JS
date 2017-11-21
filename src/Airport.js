function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  var isStormy = this._weather();
  if (isStormy == true) {
    throw("Can not land due to storm");
  }
  if (plane.inFlight() == false) {
    throw("Can not land a plane that is not in flight")
  }
  plane.switchStatus();
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var isStormy = this._weather();
  if (isStormy == true) {
    throw("Can not takeoff due to storm");
  }
  var planeIndex = this.planes.indexOf(plane);
  this.planes.splice(planeIndex, 1);
};

Airport.prototype._weather = function () {
  var array = [false, false, true];
  var isStormy = array[Math.floor(Math.random() * array.length)];
  return isStormy;
};
