describe("Car", function() {
  it("should be defined as nordev.Car", function() {
    expect(nordev.Car).toBeDefined();
  });
  
  it("should contain a constant called volume", function() {
    expect(nordev.exclamations.volume).toBeDefined();
  });
  
  it("should contain a method called speak", function() {
    expect(nordev.exclamations.speak).toBeDefined();
  });
  
  it("should have a method called speak with an optional subject", function() {
    expect(nordev.exclamations.speak('jim')).toMatch(/jim/);
  });
  
  it("should have a method called insult with the word fool", function() {
    expect(nordev.exclamations.insult()).toMatch(/fool/);
  });
});
