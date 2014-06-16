nordev.utils = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

nordev.WeekDay = function(label){

  this.lowerCaseName = function(){
    return label.toLowerCase();
  };

  this.upperCaseName = function(){
    return label.toUpperCase();
  };

  this.isWeekend = function(){
    return label === "Saturday" || label === "Sunday";
  };  
};