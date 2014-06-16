window.namespace = {};

$(namespace).trigger('start');
$(namespace).trigger('boole', false);
$(namespace).trigger('object', {
  colour: 'green',
  count: 10
});
