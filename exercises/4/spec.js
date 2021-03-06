describe("Events: Listening", function() {
  it("should trigger a start event on namespace when namespace.start() is called", function() {
    $(namespace).on('start', function(){
      expect(true).toBeTruthy();
    });
  });

  it('should pass false to the boole event on namespace', function(){
    $(namespace).on('boole', function(event, result){
      expect(result).toEqual(false);
    });
  });

  it('should pass an object with a colour of green, a count of 10', function(){
    var expected = {
      colour: 'green',
      count: 10
    };
    $(namespace).on('object', function(event, object){
      expect(object).toEqual(expected);
    });
  });
});
