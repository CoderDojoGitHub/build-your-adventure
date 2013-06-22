enchant()

var game = new Game(640, 480)
game.scale = 1.25
game.fps = 25
game.preload('images/character.gif', 'images/map.png')

var map
var character

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
}
