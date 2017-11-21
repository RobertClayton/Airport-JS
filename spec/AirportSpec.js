describe("Airport", function() {

  var airport;

  describe("Good weather", function() {
    beforeEach(function() {
      airport = new Airport();
      plane = {
        switchStatus: function() {},
        inFlight: function() {return true;}
      };
      spyOn(airport, "_weather").and.returnValue(false);
    });
    it("can land a plane", function() {
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it("instruct a plane to takeoff", function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });


  describe("Bad weather", function() {
    beforeEach(function() {
      airport = new Airport();
      spyOn(airport, "_weather").and.returnValue(true);
    });

    it("can land a plane", function() {
      expect( function(){ airport.land(plane); } ).toThrow("Can not land due to storm");
    });

    it("instruct a plane to takeoff", function() {
      spyOn(airport, "planes").and.returnValue([plane]);
      expect( function(){ airport.takeoff(plane); } ).toThrow("Can not takeoff due to storm");
    });
  });

  describe("landing and taking off planes based on flight status", function() {
    beforeEach(function() {
      airport = new Airport();
      spyOn(airport, "_weather").and.returnValue(false);
    });

    it("if plane is not in flight it cannot land", function() {
      spyOn(plane, "inFlight").and.returnValue(false);
      expect( function(){ airport.land(plane); } ).toThrow("Can not land a plane that is not in flight");
    });

  });
});
