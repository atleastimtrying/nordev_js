window.namespace = {};

$(namespace).on('init', function(){
  aflog();
});

$(namespace).on('average', function( event, arr){
  afsum(arr);
});


$(namespace).on('first', function( event, arr){
  first(arr);
});