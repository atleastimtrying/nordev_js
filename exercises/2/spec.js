describe("Car", function() {
  it("should be defined as nordev.Car", function() {
    expect(nordev.Car).toBeDefined();
  });
  
  it("should have an instance with a drive method", function() {
    var car = new nordev.Car();
    expect(car.drive).toBeDefined();
  });
  
  it("should have an instance with a journeys method", function() {
    var car = new nordev.Car();
    expect(car.journeys).toBeDefined();
  });
  
  it("should have a journeys method that returns 0 at the start", function() {
    var car = new nordev.Car();
    expect(car.journeys()).toEqual(0);
  });
  
  it("should have a drive method that increments journeys", function() {
    var car = new nordev.Car();
    car.drive();
    expect(car.journeys()).toEqual(1);
  });

  it("should have a drive method that increments journeys twice", function() {
    var car = new nordev.Car();
    car.drive();
    car.drive();
    expect(car.journeys()).toEqual(2);
  });

});
