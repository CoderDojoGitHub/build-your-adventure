game.addEventListener("load", function(){

  // Get a character
  character = new Sprite(32, 32)
  character.image = game.assets['images/girl.gif']
  character.frame = 0
  character.x = 100
  character.y = 100
  game.rootScene.addChild(character)

  speed = 2

  function movement(){

    x = this.x
    y = this.y

    if (game.input.left) {
      x -= 1 * speed
      character.frame = 3
    }
    if (game.input.right) {
      x += 1 * speed
      character.frame = 6
    }
    if (game.input.up) {
      y -= 1 * speed
      character.frame = 9
    }
    if (game.input.down) {
      y += 1 * speed
      character.frame = 0
    }

    var top = this.y
    var bottom = this.y + 32
    var left = this.x
    var right = this.x + 32


    if (map.hitTest(left, top)){
      this.x += 2
      this.y += 2
      return
    }
    if (map.hitTest(right, top)){
      this.x -= 2
      this.y += 2
      return
    }
    if (map.hitTest(left, bottom)){
      this.x += 2
      this.y -= 2
      return
    }
    if (map.hitTest(right, bottom)){
      this.x -= 2
      this.y -= 2
      return
    }

    this.x = x
    this.y = y

  }
  character.addEventListener("enterframe", movement)

})
