window.tl.util = {
  parseTime: function(milliseconds){
    seconds = Math.floor(milliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    return tl.util.zeroize(hours) + ':' + tl.util.zeroize(minutes - (hours * 60)) +':' + tl.util.zeroize(seconds - (minutes * 60));
  },
  zeroize: function(amount){
    if(amount < 10){
      return '0' + amount;
    }else{
      return amount;
    }
  },
  now: function(){
    return Date.now();
  },
  difference: function(startTime){
    return Date.now() - startTime;
  },
  emit: function(label, data){
    $(tl).trigger(label, data);
  }
};