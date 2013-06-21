game.addEventListener("load", function(){

  // Get a character
  character = new Sprite(32, 32)
  character.image = game.assets['images/boy.gif']
  character.frame = 0
  character.x = 100
  character.y = 100
  game.rootScene.addChild(character)

  function movement(){

    var x = this.x

    if (game.input.left) {
      x -= 1
    }
    if (game.input.right) {
      x += 1
    }

    this.x = x

  }
  character.addEventListener("enterframe", movement)

})
