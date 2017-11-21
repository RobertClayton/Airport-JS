function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var isStormy = this._weather();
  if (isStormy == false) {
    var planeIndex = this.planes.indexOf(plane);
    this.planes.splice(planeIndex, 1);
  }
};

Airport.prototype._weather = function () {
  var array = [false, false, true];
  var isStormy = array[Math.floor(Math.random() * array.length)];
  return isStormy;
};
