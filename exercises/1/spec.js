describe("Singleton", function() {
  it("should be defined as nordev.exclamations", function() {
    expect(nordev.exclamations).toBeDefined();
  });
  
  it("should contain a constant called volume", function() {
    expect(nordev.exclamations.volume).toBeDefined();
  });
  
  it("should contain a method called speak", function() {
    expect(nordev.exclamations.speak).toBeDefined();
  });
  
  it("should have a method called speak with an optional subject that is returned in a string", function() {
    expect(nordev.exclamations.speak('jim')).toMatch(/jim/);
  });
  
  it("should have a method called insult which should return a string with the word fool in it.", function() {
    expect(nordev.exclamations.insult()).toMatch(/fool/);
  });
});
