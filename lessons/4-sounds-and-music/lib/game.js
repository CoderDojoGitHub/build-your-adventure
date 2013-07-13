enchant()

var game = new Game(240, 240)
game.scale = 2
game.fps = 25
game.preload('images/map.png', 'images/boy.gif', 'images/girl.gif',
             'sounds/pit.wav', 'sounds/appear.wav')
var map, character

function resetGame(){
  document.body.setAttribute('style', 'background-color:#911')
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 100)
  setTimeout(function() {
    document.body.setAttribute('style', 'background-color:#911')
  }, 200)
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 300)

  event = new enchant.Event("reset")
  game.rootScene.dispatchEvent(event)
}

function endGame(){
  document.body.setAttribute('style', 'background-color:#6CC644')
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 100)
  setTimeout(function() {
    document.body.setAttribute('style', 'background-color:#6CC644')
  }, 200)
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 300)

  event = new enchant.Event("reset")
  game.rootScene.dispatchEvent(event)
}

