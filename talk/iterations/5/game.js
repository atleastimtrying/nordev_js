(function(){
  fes.Game = function(){
    var self = this;
    var init = function(){
      lock_screen();
      var display = document.getElementById('display');
      self.scene = new THREE.Scene();
      self.camera = new fes.Camera(70, self.scene);
      self.renderer = new fes.Renderer();
      self.world = new fes.World(self.scene);

      //orbs
      self.orbs = [];
      for(var i = 0, l = 10; i < l; ++i){
        self.orbs.push(new fes.Orb(self.scene));
      }

      self.render(90, 0);
      //interaction
      this.interaction = new fes.Interaction(self.render);
    };
    var lock_screen =  function(){
      if(screen.mozLockOrientation){
        window.screen.mozLockOrientation('portrait');
      }
    };
    this.render = function(xdiff, ydiff){
      self.camera.move(xdiff, ydiff);
      self.renderer.render(self.scene, self.camera.camera);
    };
    init();
  };
}());