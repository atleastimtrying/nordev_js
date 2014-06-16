(function(){  
  fes.to_radians = function(degrees){
    return degrees * Math.PI / 180;
  };
  fes.to_degrees = function(radians){
    return radians * 180/ Math.PI;
  };
  window.onload = function(){
    window.game = new fes.Game();
  };
}());