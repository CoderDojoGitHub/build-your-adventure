game.addEventListener("load", function(){

  // Get a character
  character = new Sprite(32, 32)
  character.image = game.assets['images/boy.gif']
  character.frame = 0
  character.x = 0
  character.y = 0
  game.rootScene.addChild(character)

})
