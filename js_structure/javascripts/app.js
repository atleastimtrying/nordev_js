(function() {
  var App;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  App = App = (function() {

    function App() {
      this.prevSlide = __bind(this.prevSlide, this);
      this.nextSlide = __bind(this.nextSlide, this);
      this.keyPress = __bind(this.keyPress, this);      $(window).keyup(this.keyPress);
      $('section:first-child').show().addClass('active');
    }

    App.prototype.keyPress = function(event) {
      console.log(event.keyCode);
      if (event.keyCode === 32) {
        return this.nextSlide();
      } else {
        return this.prevSlide();
      }
    };

    App.prototype.nextSlide = function() {
      var next;
      next = $('.active').next('section');
      if (next.length !== 0) {
        $('.active').hide().removeClass('active');
        return next.show().addClass('active');
      }
    };

    App.prototype.prevSlide = function() {
      var prev;
      prev = $('.active').prev('section');
      if (prev.length !== 0) {
        $('.active').hide().removeClass('active');
        return prev.show().addClass('active');
      }
    };

    return App;

  })();

  $(function() {
    return window.app = new App;
  });

}).call(this);
