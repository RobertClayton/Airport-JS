describe("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("landing and takeoff", function() {
    it("can land a plane", function() {
      airport.land("plane");
      expect(airport.planes.length).toEqual(1);
    });

    it("instruct a plane to takeoff", function() {
      airport.takeoff("plane");
      expect(airport.planes.length).toEqual(0);
    });
  });

});
