window.tl.UI = function(){
  $('.start').on('click', function(){
    tl.util.emit('start');
  });
  $('.stop').on('click', function(){
    tl.util.emit('stop');
  });
};