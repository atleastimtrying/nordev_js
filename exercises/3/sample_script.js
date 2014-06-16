nordev.weekdays = [];

nordev.utils.days.forEach(function(day){
  nordev.weekdays.push(new nordev.WeekDay(day));
});