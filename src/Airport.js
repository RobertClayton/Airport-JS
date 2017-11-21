function Airport() {
  this.planes = [];
  this.maxCapacity = 10;
};

Airport.prototype.land = function(plane) {
  var isStormy = this._weather();
  if (isStormy == true) {
    throw("Can not land due to storm");
  }
  if (plane.inFlight() == false) {
    throw("Can not land a plane that is not in flight")
  }
  if (this.planes.length === this.maxCapacity) {
    throw("Can not land at max capacity")
  }
  plane.switchStatus();
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var isStormy = this._weather();
  if (isStormy == true) {
    throw("Can not takeoff due to storm");
  }
  if (plane.inFlight() == true) {
    throw("Can not takeoff if a plane is in flight");
  }
  var planeIndex = this.planes.indexOf(plane);
  plane.switchStatus();
  this.planes.splice(planeIndex, 1);
};

Airport.prototype._weather = function () {
  var array = [false, false, true];
  var isStormy = array[Math.floor(Math.random() * array.length)];
  return isStormy;
};

Airport.prototype._setCapacity = function(number) {
  this.maxCapacity = number;
};
