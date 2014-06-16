window.timelord = {};
//ui
window.timelord.UI = function(){
  var emit = function(message, data){
    if(!data){
      data = {};
    }
    $(timelord).trigger(message, data);
  };

  var parent_id = function(event){
    var button = $(event.currentTarget);
    var parent = button.parents('.timer');
    return parent.data('id');
  };

  $('body').on({
    'click': function(){
      var title = $('.titleInput').val();
      emit('new-timer', { title: title });
    }
  },'.new-timer');

  $('body').on({
    'click': function(event){
      emit('stop-timer', parent_id(event));
    }
  },'.stop-timer');

  $('body').on({
    'click': function(event){
      emit('start-timer', parent_id(event));
    }
  },'.start-timer');

  $('body').on({
    'click': function(event){
      emit('delete-timer', parent_id(event));
    }
  },'.delete-timer');
};
//timer controller
window.timelord.TimerController = function(){
  var timers = [];

  var newTimer = function(event, options){
    timers.push(new timelord.Timer(options));
  };

  $(timelord).on('new-timer', newTimer);
  
  var animate = function(){
    renderTimers();
    requestAnimationFrame(animate);
  };

  var renderTimers = function(){
    timers.forEach(function(timer){
      timer.render();
    });
  };

  animate();
};

//timer
window.timelord.Timer = function(options){
  var timestamp = Date.now();
  var title = options.title;
  var dom_element = $('<section class="timer">'+
    '<title>' + title + '</title>' + 
    '<button class="start-timer">start</button>' +
    '<button class="stop-timer">stop</button>' +
    '<button class="delete-timer">delete</button>' +
    '<button class="reset-timer">reset</button>' +
    '</section>');

  var start = function(){
    timestamp = Date.now();
  };

  var read_ms = function(){
    new_time = Date.now();
    return new_time - timestamp;
  };

  var read_human_text = function(){
    ms = read_ms();
  };

  this.render = function(){

  };

};

//storage
window.timelord.Storage = function(){
  //stores the state and the start time of each timer in localstorage
  // makes sure its the only data source
};

//app
window.timelord.App = function(){
  this.ui = new timelord.UI();
  this.timerController = new timelord.TimerController();
  this.storage = new timelord.Storage();
};
$(function(){
  window.app = new timelord.App();
});