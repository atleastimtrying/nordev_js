window.tl.Timer = function(){
  // var startTime;
  // var endTime = 0;
  // var running = false;
  // var render = function(){
  //   if(running){
  //     return tl.util.difference(startTime);
  //   }else{
  //     return endTime;
  //   }
  // };

  // var loop = function(){
  //   tl.util.emit('render', render());
  //   setTimeout(loop, 500);
  // };

  // var start = function(){
  //   running = true;
  //   startTime = tl.util.now();
  //   tl.util.emit('storeTime', {
  //     running: running,
  //     time: startTime
  //   });
  // };

  // var stop = function(){
  //   running = false;
  //   endTime = tl.util.difference(startTime);
  //   tl.util.emit('storeTime', {
  //     running: running, 
  //     time: endTime 
  //   });
  // };

  // var setTime = function(event, timeobject){
  //   running = timeobject.running;
  //   if(running){
  //     startTime = timeobject.time;
  //   }else{
  //     endTime = timeobject.time;
  //   }
  // };

  // $(tl).on('start', start);
  // $(tl).on('stop', stop);
  // $(tl).on('startTime', setTime);
  // loop();
};