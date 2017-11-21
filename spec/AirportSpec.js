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
      spyOn(plane, "inFlight").and.returnValue(false);
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

    it("if plane is in flight it cannot take off", function() {
      expect( function(){ airport.takeoff(plane); } ).toThrow("Can not takeoff if a plane is in flight");
    });
  });

  describe("airport has a maxCapacity", function() {
    beforeEach(function() {
      airport = new Airport();
      spyOn(airport, "_weather").and.returnValue(false);
    });

    it("throw an error when trying to land at max capacity", function() {
      airport.maxCapacity = 0;
      console.log(airport);
      expect( function(){ airport.land(plane); } ).toThrow("Can not land at max capacity");
    });
  });
});
