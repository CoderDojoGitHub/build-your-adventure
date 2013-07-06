# Lesson 3: Add interactive objects

## Goals

- Change the location of an existing sprite
- Reset the game when your character runs into the pit
- Make an object appear based on user interaction
- Add a new sprite to the map

## Getting set up

- Download [this lesson](http://bit.ly/dojo-3) onto your computer

- Create a folder for your project and put the lesson files there

- Open up `index.html`


## objects.js

We're going to put all of our objects into this file. Right now it has a bunch of objects all set up using Sprites. Here's what one of them looks like:

``` javascript
// A pit of dispair
pit = new Sprite(16, 16)
pit.image = game.assets['images/map.png']
pit.frame = 9
pit.x = 16 * 5
pit.y = 16 * 5
game.rootScene.addChild(pit)
```

This is the basic format for adding sprites. We tell it which image to use for sprites, which frame to use (just like the map), and then we tell it where to put the object with `x` and `y` coordinates. Since our tiles are 16 pixels, we can multiply single numbers by 16 to move it one tile at a time.

After we put the sprite on the page, we set up a function to interact with the object. Right now this function is empty with a placeholder for when your character runs into the pit.

``` javascript
function pitframe() {

  if ( character.intersect(pit) ) {

  }

}
pit.addEventListener("enterframe", pitframe)
```

Anytime you want to create a new sprite, you can copy and paste this sample and rename the variables.

## Your assignment

### Reset the game when you fall into the pit

The first thing we want to to is make the game reset when you fall into the pit. I've already coded up a function called `resetGame` which will reset the game. But we need to call it when your character intersects with the pit.

To do this, we'll call `resetGame()` inside of the function.

``` javascript
function pitframe() {

  if ( character.intersect(pit) ) {
    resetGame()
  }

}
```

### Move the flowers somewhere else

The `x` and `y` properties of the sprite tell it where on the map the sprite should be. Let's move the flowers down to the corner by changing the `y` value.

``` javascript
flowers.x = 16 * 2
flowers.y = 16 * 14
```

### Make the pot appear when you walk over the flowers

You might notice that we have a sprite called `pot` that isn't visible. I want this pot to appear when you walk over the flowers. There's already some logic in place, all we need to do is place the pot into the map. The pot sprite is missing one line the other sprites have: `game.rootScene.addChild(pot)` so let's add it in the logic.

``` javascript
function flowersframe() {
  if ( character.intersect(flowers) && !potVisible) {
    game.rootScene.addChild(pot)
    potVisible = true
  }
}
```

The pot should now show up when you walk over the flowers!

### Add a treasure chest to the page

To get some practice for your own game, let's add one more sprite to this page. I want to add a treasure chest sprite to the upper right of the map. We're going to copy and paste the code before, and rename the variables:

``` javascript
// A treasure chest
chest = new Sprite(16, 16)
chest.image = game.assets['images/map.png']
chest.frame = 25
chest.x = 16 * 13
chest.y = 16 * 2
game.rootScene.addChild(chest)
```

Now you should have a treasure chest showing up!

## Free time

Add some objects to your map.

