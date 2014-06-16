(function(){
  fes.World = function(scene){
    var geometry = new THREE.SphereGeometry(30,120,120);
    var texture = THREE.ImageUtils.loadTexture('grass.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = 4;
    texture.repeat.y = 4;
    var material = new THREE.MeshLambertMaterial( {
      map: texture
    } );
    var world = new THREE.Mesh( geometry, material );
    scene.add(world);
    return world;
  };
}());