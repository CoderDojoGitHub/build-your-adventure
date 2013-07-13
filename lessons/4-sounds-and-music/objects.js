game.addEventListener("load", function(){

  // A pit of dispair
  pit = new Sprite(16, 16)
  pit.image = game.assets['images/map.png']
  pit.frame = 9
  pit.x = 16 * 5
  pit.y = 16 * 5
  game.rootScene.addChild(pit)

  function pitframe() {

    if ( character.hitbox.intersect(pit) ) {
      game.assets['sounds/pit.wav'].play()
      resetGame()
    }

  }
  pit.addEventListener("enterframe", pitframe)


  // A moveable pot
  pot = new Sprite(16, 16)
  pot.image = game.assets['images/map.png']
  pot.frame = 26
  pot.x = 16 * 10
  pot.y = 16 * 10
  pot.tl.setFrameBased()

  potVisible = false
  potFalling = false

  function potframe() {

    if ( character.hitbox.intersect(pot) ) {
      character.blocked = true

      var pot_x = 0
      var pot_y = 0
      if ( character.sensors.left.intersect(pot) ) {
        pot_x -= 10
      }
      if ( character.sensors.right.intersect(pot) ) {
        pot_x += 10
      }
      if ( character.sensors.top.intersect(pot) ) {
        pot_y -= 10
      }
      if ( character.sensors.bottom.intersect(pot) ) {
        pot_y += 10
      }

      pot.tl.moveBy(pot_x, pot_y, 12, enchant.Easing.CUBIC_EASEOUT)
    }

    if (!potFalling && Math.round(pot.x) == pit.x && Math.round(pot.y) == pit.y) {
      // The pot falls in and you win!
      potFalling = true
      pot.tl.scaleTo(0, 30, enchant.Easing.CUBIC_LINEAR).then(function() {
          setTimeout(endGame, 0)
        })
    }

  }
  pot.addEventListener("enterframe", potframe)

  function potreset () {

    if ( potVisible ) {
      game.rootScene.removeChild(pot)
      potVisible = false
      potFalling = false
      pot.scaleX = 1
      pot.scaleY = 1
    }

  }
  game.rootScene.addEventListener("reset", potreset)


  // Some flowers
  flowers = new Sprite(16, 16)
  flowers.image = game.assets['images/map.png']
  flowers.frame = 18
  flowers.x = 16 * 2
  flowers.y = 16 * 10
  game.rootScene.addChild(flowers)


  function flowersframe() {
    if ( character.hitbox.intersect(flowers) && !potVisible) {
      potVisible = true

      pot.scaleX = 0
      pot.scaleY = 0
      game.rootScene.removeChild(character)
      game.rootScene.addChild(pot)
      pot.x = 16 * 10
      pot.y = 16 * 10
      game.rootScene.addChild(character)

      // I wonder what this does...
      // Don't hesitate to ask if you're curious! :)
      pot.tl.scaleTo(1, 30, enchant.Easing.ELASTIC_EASEOUT);
    }
  }
  flowers.addEventListener("enterframe", flowersframe)

})
