(function(){
  fes.Interaction = function(move_callback){
    var touchx, touchy;
    var touch_start = function(event){
      touchx = event.touches[0].clientX;
      touchy = event.touches[0].clientY;
    };
    var touch_move = function(event){
      xdiff = event.changedTouches[0].clientX - touchx;
      ydiff = event.changedTouches[0].clientY - touchy;
      touchx = event.changedTouches[0].clientX;
      touchy = event.changedTouches[0].clientY;
      move_callback(xdiff, ydiff);
    };
    document.getElementById('interface').addEventListener("touchstart", touch_start, true);
    document.getElementById('interface').addEventListener("touchmove", touch_move, true);
  };
}());