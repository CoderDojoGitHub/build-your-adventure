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
    if (game.input.down) {
      y += 1 * speed
      character.frame = 0
    }
    if (game.input.up) {
      y -= 1 * speed
      character.frame = 9
    }

    // Did our character run into something?
    var top = y
    var bottom = y + 32
    var left = x
    var right = x + 32

    if ( map.hitTest(left, top) ) {
      if (this.x != x) {
        x += speed
      }
      if (this.y != y){
        y += speed
      }
    }

    if ( map.hitTest(right, top) ) {
      if (this.x != x) {
        x -= speed
      }
      if (this.y != y){
        y += speed
      }
    }

    if ( map.hitTest(left, bottom) ) {
      if (this.x != x) {
        x += speed
      }
      if (this.y != y){
        y -= speed
      }
    }

    if ( map.hitTest(right, bottom) ) {
      if (this.x != x) {
        x -= speed
      }
      if (this.y != y){
        y -= speed
      }
    }

    this.x = x
    this.y = y

  }
  character.addEventListener("enterframe", movement)

})
