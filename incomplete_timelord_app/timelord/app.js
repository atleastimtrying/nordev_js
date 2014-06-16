window.tl.App = function(){
  this.ui = new tl.UI();
  this.timer = new tl.Timer();
  this.render = new tl.Render();
  this.storage = new tl.Storage();
};

$(function(){
  console.log('timelord!');
});