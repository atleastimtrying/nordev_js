describe("weekdays array", function() {
  it('should be bound to nordev.weekdays', function(){
    expect(nordev.weekdays).toBeDefined();
  });

  it('should have a length of 7', function(){
    expect(nordev.weekdays.length).toEqual(7);
  });

  it('should contain 7 instances of WeekDays', function(){
    result = "";
    nordev.weekdays.forEach(function(weekday){
      result += weekday.lowerCaseName();
    });
    expect(result).toEqual("mondaytuesdaywednesdaythursdayfridaysaturdaysunday");
  });
});
