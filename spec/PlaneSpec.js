describe ("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("Plane attributes", function() {
    it("has a status", function() {
      expect(plane.inFlight()).toEqual(true);
    });

    it ("can change its in flight status from true to false", function() {
      plane.switchStatus();
      expect(plane.inFlight()).toEqual(false);
    });
    it ("can change its in flight status from false to true", function() {
      plane.switchStatus();
      plane.switchStatus();
      expect(plane.inFlight()).toEqual(true);
    });
  });

});
