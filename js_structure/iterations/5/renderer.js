(function(){
  fes.Renderer = function(){
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000033, 1);
    document.body.appendChild( renderer.domElement );
    return renderer;
  };
}());