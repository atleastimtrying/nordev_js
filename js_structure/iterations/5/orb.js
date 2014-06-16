(function(){
  fes.Orb = function(scene){
    this.lon = fes.to_radians(Math.random() * 360);
    this.lat = fes.to_radians(Math.random() * 360);
    var calculate_xyz = function(lon, lat, radius){
      var initialx = Math.cos(lon);
      var initialz = Math.sin(lon);
      var initialy = Math.sin(lat);
      var initialw = Math.cos(lat);
      return {
        y: initialw * initialx * radius,
        x: initialy * radius,
        z: initialw * initialz * radius
      };
    };
    var init = function(self){
      var orb = new THREE.PointLight(0xFFFFCC, 6, 3);
      var location = calculate_xyz(self.lon, self.lat, 32);
      self.x = orb.position.x = location.x;
      self.y = orb.position.y = location.y;
      self.z = orb.position.z = location.z;
      scene.add(orb);
    };
    init(this);
  };
}());