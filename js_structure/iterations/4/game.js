(function(){
  fes.to_radians = function(degrees){
    return degrees * Math.PI / 180;
  };
  fes.to_degrees = function(radians){
    return radians * 180/ Math.PI;
  };
  fes.setup = {
    lock_screen: function(){
      if(screen.mozLockOrientation){
        window.screen.mozLockOrientation('portrait');
      }
    },
    build_renderer: function(){
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor( 0x000033, 1);
      document.body.appendChild( renderer.domElement );
      return renderer;
    },
    build_sphere: function(){
      var geometry = new THREE.SphereGeometry(30,120,120);
      var texture = THREE.ImageUtils.loadTexture('grass.jpg');
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.x=4;
      texture.repeat.y=4;
      var material = new THREE.MeshLambertMaterial( {
        map: texture
      } );
      return new THREE.Mesh( geometry, material );
    }
  };
  
  fes.start = function(){
    fes.setup.lock_screen();
    var display = document.getElementById('display');
    var scene = new THREE.Scene();
    var camera = new fes.Camera(70, scene);
    var renderer = fes.setup.build_renderer();
    var sphere = fes.setup.build_sphere();
    scene.add(sphere);

    //orbs
    var orbs = [];
    for(var i = 0, l = 10; i < l; ++i){
      orbs.push(new fes.Orb(scene));
    }

    renderer.render(scene, camera.camera);
    
    //interaction
    var interaction = new fes.Interaction(function(xdiff, ydiff){
      camera.move(xdiff, ydiff);
      renderer.render(scene, camera.camera);
    });
  };
}());