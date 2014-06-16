describe("Events triggering", function() {
  it("should call window.aflog() on the init event on namespace", function() {
    window.aflog = function(){
      expect(false).toBeFalsy();
    };
    $(namespace).trigger('init');
  });

  it("should pass the array bound to the sum event to the window.sum method", function() {
    var original = [12, 23, 34, 45];
    window.sum = function(result){
      expect(result).toEqual(original);
    };
    $(namespace).trigger('sum', original);
  });

  it("should trigger an event called Hi after an event called Hello", function(){
    $(namespace).on("Hi", function(){
      expect(true).toBeTruthy();
    });
    $(namespace).trigger("hello");
  });
});
