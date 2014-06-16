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

    var cameraAngley = 0;
    var cameraAnglex = 0;
    var orbitRange = 70;
    var display = document.getElementById('display');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    //renderer
    var renderer = fes.setup.build_renderer();

    //globe
    var sphere = fes.setup.build_sphere();
    scene.add(sphere);

    var marker = new THREE.PointLight(0xFFFFFF, 6, 5);
    scene.add(marker);

    //orbs
    var orbs = [];
    for(var i = 0, l = 10; i < l; ++i){
      orbs.push(new fes.Orb(scene));
    }

    renderer.render(scene, camera);
    
    //interaction
    var touchx, touchy;
    document.getElementById('interface').addEventListener("touchstart", function(event){
      touchx = event.touches[0].clientX;
      touchy = event.touches[0].clientY;
    }, true);
    document.getElementById('interface').addEventListener("touchmove", function(event){
      xdiff = event.changedTouches[0].clientX - touchx;
      ydiff = event.changedTouches[0].clientY - touchy;
      touchx = event.changedTouches[0].clientX;
      touchy = event.changedTouches[0].clientY;
      if((ydiff < 0 && cameraAngley > -80) || (ydiff > 0 && cameraAngley < 80) ){
        cameraAngley += (ydiff/3);
      }
      if(xdiff != 0 ){
        cameraAnglex += (xdiff/3);
      }
      cameraAnglex %= 360;
      var initialx = Math.cos(fes.to_radians(cameraAnglex));
      var initialz = Math.sin(fes.to_radians(cameraAnglex));
      var initialy = Math.sin(fes.to_radians(cameraAngley));
      var initial_poorly_named = Math.cos(fes.to_radians(cameraAngley));
      var x = initial_poorly_named * initialx * orbitRange;
      var y = initialy * orbitRange;
      var z = initial_poorly_named * initialz * orbitRange;
      marker.position.x = initial_poorly_named * initialx * 32;
      marker.position.y = initialy * 32;
      marker.position.z = initial_poorly_named * initialz * 32;

      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
      camera.lookAt(new THREE.Vector3(0,0,0));
      renderer.render(scene, camera);
    }, true);
  };
}());