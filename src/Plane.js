function Plane () {
  this._inFlight = true;
};

Plane.prototype.inFlight = function () {
  return this._inFlight;
};

Plane.prototype.switchStatus = function () {
  this._inFlight == true ? this._inFlight = false : this._inFlight = true;
};
