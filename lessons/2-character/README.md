# Lesson 2: Make a character

## Goals

- Make your character move up and down
- Change the speed of your character's movement
- Make the character change direction (sprites) with the direction you're moving
- Add collision detection with the map

## Getting set up

- Download [this lesson]() onto your computer

- Create a folder for your project and put the lesson files there

- Open up `index.html`

## character.js

`character.js` is where we're going to be working today. There's a basic character already set up to move left and right around the map.

## Move up and down

The first thing we're going to be doing is getting our character to move up and down. The `movement` function controls this right now, so we're going to add to it.

``` javascript
function movement(){

  x = this.x
  y = this.y

  if (game.input.left) {
    x -= 1
  }
  if (game.input.right) {
    x += 1
  }
  if (game.input.up) {
    y -= 1
  }
  if (game.input.down) {
    y += 1
  }

  this.x = x
  this.y = y

}
```

## Change the speed

To change the speed, all we need to do is add different numbers each time you press right. To make your character move faster in the *up* direction, change this line to a 2:

``` javascript
if (game.input.up) {
  y -= 2
}
```

### With variables

If we want to control the speed everywhere in the game, we can use a variable and multiply each movement by it. Right above the movement function, let's declare a variable called **`speed`** and use it in the function

``` javascript
speed = 2

function movement(){

  x = this.x
  y = this.y

  if (game.input.left) {
    x -= 1 * speed
  }
  if (game.input.right) {
    x += 1 * speed
  }
  if (game.input.up) {
    y -= 1 * speed
  }
  if (game.input.down) {
    y += 1 * speed
  }

  this.x = x
  this.y = y

}
```

## Make your character point in the right direction

This is the line that decides which one of the sprites to use for your character:

``` javascript
character.frame = 0
```

What we're going to do is change this each time the character moves. So we're going to change the `movement` function again:

``` javascript
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

  this.x = x
  this.y = y

}
```

## Collision detection

The first rule in programming is to steal as much as you can. So let's copy and paste this into `map.js`

``` javascript
map.collisionData =
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
```

- Now tell your character how to hit things
