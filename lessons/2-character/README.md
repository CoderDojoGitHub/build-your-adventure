# Lesson 2: Make a character

## Goals

- Make your character move up and down
- Change the speed of your character's movement
- Make the character change direction (sprites) with the direction you're moving
- Add collision detection with the map

## Getting set up

- Download [this lesson](http://bit.ly/dojo-2) onto your computer

- Move the lesson files onto your desktop

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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
```

This map identifies which parts of your map are solid, and which parts the character can walk through. A `0` is free space while a `1` is a wall.

``` javascript
// Did our character run into something?

var top = y
var bottom = y + 32
var left = x
var right = x + 32


if (map.hitTest(left, top)){
  x += 2
  y += 2
}
if (map.hitTest(right, top)){
  x -= 2
  y += 2
}
if (map.hitTest(left, bottom)){
  x += 2
  y -= 2
}
if (map.hitTest(right, bottom)){
  x -= 2
  y -= 2
}
```


We had to test four different points because your character isn't just one pixel big.

![](http://cl.ly/image/0S301o0G220i/content)

We ended up checking four different points:

![](http://cl.ly/image/3B3l100n3x2W/content)



Now we need to detect the edges and make sure that our character can't go past them.

``` javascript
// Did our character run into something?

var top = y
var bottom = y + 32
var left = x
var right = x + 32


if (map.hitTest(left, top)){
  if( this.x != x ) {
    x += speed
  }
  if( this.y != y ) {
    y += speed
  }
}
if (map.hitTest(right, top)){
  if( this.x != x ) {
    x -= speed
  }
  if( this.y != y ) {
    y -= speed
  }
}
if (map.hitTest(left, bottom)){
  if( this.x != x ) {
    x += speed
  }
  if( this.y != y ) {
    y -= speed
  }
}
if (map.hitTest(right, bottom)){
  if( this.x != x ) {
    x -= speed
  }
  if( this.y != y ) {
    y -= speed
  }
}
```


## Your assignment

- Try and fix the bugs allowing your character to escape boundaries when the speed is > 2.

- Try and get your character to bounce back in only one direction when they hit an obstacle.

- Make the wall in the map an obstacle.

## Free time

In your game template, make any obstacles solid that you'd like.
