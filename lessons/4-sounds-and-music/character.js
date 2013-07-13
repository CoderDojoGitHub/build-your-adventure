game.addEventListener("load", function(){

  // Get a character
  character = new Sprite(32, 32)
  character.image = game.assets['images/girl.gif']
  character.frame = 0
  character.x = 160
  character.y = 160
  character.tl.setFrameBased()
  game.rootScene.addChild(character)

  character.hitbox = new Entity()
  character.hitbox.width = 10
  character.hitbox.height = 10
  game.rootScene.addChild(character.hitbox)

  character.sensors = {
    left: (function () {
        var sensor = new Entity()
        sensor.w = 1
        sensor.h = character.hitbox.height
        return sensor
      }()),
    right: (function () {
        var sensor = new Entity()
        sensor.w = 1
        sensor.h = character.hitbox.height
        return sensor
      }()),
    top: (function () {
        var sensor = new Entity()
        sensor.w = character.hitbox.width
        sensor.h = 1
        return sensor
      }()),
    bottom: (function () {
        var sensor = new Entity()
        sensor.w = character.hitbox.width
        sensor.h = 1
        return sensor
      }()),
  }
  game.rootScene.addChild(character.sensors.left)
  game.rootScene.addChild(character.sensors.right)
  game.rootScene.addChild(character.sensors.top)
  game.rootScene.addChild(character.sensors.bottom)

  function track_sensors() {
    character.hitbox.x = character.x + 11
    character.hitbox.y = character.y + 20

    character.sensors.left.x = character.hitbox.x - 1
    character.sensors.left.y = character.hitbox.y

    character.sensors.right.x = character.hitbox.x + character.hitbox.width
    character.sensors.right.y = character.hitbox.y

    character.sensors.top.x = character.hitbox.x
    character.sensors.top.y = character.hitbox.y - 1

    character.sensors.bottom.x = character.hitbox.x
    character.sensors.bottom.y = character.hitbox.y + character.hitbox.height
  }
  character.addEventListener("enterframe", track_sensors)

  speed = 3

  character.directions = {
    left: 3,
    right: 6,
    down: 0,
    up: 9
  }
  character.direction = character.directions.down
  character.walking_frame = 0

  function movement(){

    x = 0
    y = 0

    var direction = -1;
    if (game.input.left) {
      x -= 1 * speed
      direction = character.directions.left
    }
    if (game.input.right) {
      x += 1 * speed
      direction = character.directions.right
    }
    if (game.input.down) {
      y += 1 * speed
      direction = character.directions.down
    }
    if (game.input.up) {
      y -= 1 * speed
      direction = character.directions.up
    }
    if (x != 0 || y != 0) {
      character.walking_frame = (character.walking_frame + 1) % 4
    }
    if (direction != -1 && direction != character.direction) {
      character.direction = direction
      character.walking_frame = 0
    }

    character.frame = character.direction + character.walking_frame
    if (character.walking_frame == 3) character.frame -= 2

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


    // Set character.blocked = true to stop moving when colliding when objects
    if (character.blocked) {
      x *= -2
      y *= -2

      setTimeout(function() {
        character.blocked = false
      }, 50)
    }


    this.x += x
    this.y += y

  }
  character.addEventListener("enterframe", movement)

  function resetCharacter() {
    character.opacity = 0
    character.x = 160
    character.y = 160
    character.tl.cue({30: function() {
          character.x = 160
          character.y = 160
          character.tl.fadeTo(1, 30, enchant.Easing.LINEAR)
        }})
  }
  game.rootScene.addEventListener("reset", resetCharacter)

})
