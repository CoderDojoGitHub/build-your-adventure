game.addEventListener("load", function(){

  // A pit of dispair
  pit = new Sprite(16, 16)
  pit.image = game.assets['images/map.png']
  pit.frame = 9
  pit.x = 16 * 5
  pit.y = 16 * 5
  pit.scaleX = 2
  pit.scaleY = 2
  game.rootScene.addChild(pit)

  pit.addEventListener("enterframe", function(){
    //
  })



  // A moveable pot
  pot = new Sprite(16, 16)
  pot.image = game.assets['images/map.png']
  pot.frame = 26
  pot.x = 16 * 10
  pot.y = 16 * 10
  game.rootScene.addChild(pot)

})
