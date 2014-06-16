nordev.Car = function(){
  var journeys = 0;
  this.drive = function(){
    journeys += 1;
  };
  this.journeys = function(){
    return journeys;
  };
  this.beep = function(){
    alert('beep');
  };
};