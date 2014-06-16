App = class App
  constructor: ->
    $(window).keyup @keyPress
    $('section:first-child').show().addClass 'active'

  keyPress : (event)=>
    console.log event.keyCode
    if event.keyCode is 32
      @nextSlide()
    else 
      @prevSlide()

  nextSlide: =>
    next = $('.active').next('section')
    if next.length isnt 0
      $('.active').hide().removeClass 'active'
      next.show().addClass 'active'
  
  prevSlide: =>
    prev = $('.active').prev('section')
    if prev.length isnt 0
      $('.active').hide().removeClass 'active'
      prev.show().addClass 'active'

$ ->
  window.app = new App