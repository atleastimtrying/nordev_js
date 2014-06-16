(function(){
  fes.Camera = function(orbit_range, scene){
    var self = this;
    var cameraAngley = 0;
    var cameraAnglex = 0;
    var light_range = 32;
    var light = new THREE.PointLight(0xFFFFFF, 6, 5);
    var in_y_range = function(ydiff){
      return (ydiff < 0 && cameraAngley > -80) || (ydiff > 0 && cameraAngley < 80);
    };
    var in_x_range = function(xdiff){
      return (xdiff != 0 );
    };
    var init = function(){
      self.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
      scene.add(light);
    };
    this.move = function(xdiff, ydiff){
      if(in_y_range(ydiff)){
        cameraAngley += (ydiff/3);
      }
      if(in_x_range(xdiff)){
        cameraAnglex += (xdiff/3);
      }
      cameraAnglex %= 360;
      var initialx = Math.cos(fes.to_radians(cameraAnglex));
      var initialz = Math.sin(fes.to_radians(cameraAnglex));
      var initialy = Math.sin(fes.to_radians(cameraAngley));
      var initialm = Math.cos(fes.to_radians(cameraAngley));
      self.camera.position.x = initialm * initialx * orbit_range;
      self.camera.position.y = initialy * orbit_range;
      self.camera.position.z = initialm * initialz * orbit_range;
      self.camera.lookAt(new THREE.Vector3(0,0,0));
      light.position.x = initialm * initialx * light_range;
      light.position.y = initialy * light_range;
      light.position.z = initialm * initialz * light_range;
    };
    init();
  };
}());