game.addEventListener("load", function(){

  // A pit of dispair
  pit = new Sprite(16, 16)
  pit.image = game.assets['images/map.png']
  pit.frame = 9
  pit.x = 16 * 5
  pit.y = 16 * 5
  game.rootScene.addChild(pit)

  function pitframe() {

    if ( character.intersect(pit) ) {
    }

  }
  pit.addEventListener("enterframe", pitframe)


  // A moveable pot
  pot = new Sprite(16, 16)
  pot.image = game.assets['images/map.png']
  pot.frame = 26
  pot.x = 16 * 10
  pot.y = 16 * 10

  potVisible = false

  function potframe() {

    if ( character.intersect(pot) ) {
      character.blocked = true
    }

  }
  pot.addEventListener("enterframe", potframe)


  // Some flowers
  flowers = new Sprite(16, 16)
  flowers.image = game.assets['images/map.png']
  flowers.frame = 18
  flowers.x = 16 * 2
  flowers.y = 16 * 10
  game.rootScene.addChild(flowers)


  function flowersframe() {
    if ( character.intersect(flowers) && !potVisible) {
      potVisible = true
    }
  }
  flowers.addEventListener("enterframe", flowersframe)

})
