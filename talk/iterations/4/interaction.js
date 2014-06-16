(function(){
  fes.Interaction = function(move_callback){
    var touchx, touchy;
    document.getElementById('interface').addEventListener("touchstart", function(event){
      touchx = event.touches[0].clientX;
      touchy = event.touches[0].clientY;
    }, true);
    document.getElementById('interface').addEventListener("touchmove", function(event){
      xdiff = event.changedTouches[0].clientX - touchx;
      ydiff = event.changedTouches[0].clientY - touchy;
      touchx = event.changedTouches[0].clientX;
      touchy = event.changedTouches[0].clientY;
      move_callback(xdiff, ydiff);
    }, true);
  };
}());