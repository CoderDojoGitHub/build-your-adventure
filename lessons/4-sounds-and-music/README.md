# Lesson 4: Sounds and Music

## Goals

- Explore the effect of sound and music on game experience
- See how the "pit.wav" sound works
- Play "appear.wav" sound effect to when revealing the pot
- Add "bump.wav" sound effect to game assets, play it when moving the pot
- Add "goodvibes.wav" music and loop it while the game is playing
- Create a new sound, add it, and play it when the pot falls into the pit

## Getting set up

- Download [this lesson](http://bit.ly/dojo-4) onto your computer

- Create a folder for your project and put the lesson files there

- Open up `index.html`


## objects.js

Let's take a look at the function ```pitframe```, which gives behavior to the ```pit``` object:

``` javascript
function pitframe() {

  if ( character.hitbox.intersect(pit) ) {
    game.assets['sounds/pit.wav'].play()
    resetGame()
  }

}
```

As you can see, you can play a sound with only one line of code.


## game.js

Now, look at our ```preload``` function. You can see that we load sounds the same way that we load sprites.

``` javascript
game.preload('images/map.png', 'images/boy.gif', 'images/girl.gif',
             'sounds/pit.wav', 'sounds/appear.wav')
```

What is "appear.wav?" That is another sound effect we are going to try.


## objects.js

Let's play appear.wav when we step on the flowers to reveal the pot. Look at the ```flowersframe``` function at the bottom of the file:

``` javascript
function flowersframe() {
  if ( character.hitbox.intersect(flowers) && !potVisible ) {
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
```

## Your Assignment

Add code to the ```flowersframe``` function to play ```appear.wav``` when the pot appears.

## Your Next Assignment

Add ```bump.wav``` to the ```preload``` function, then play that sound when the player bumps into the pot.


## map.js

Now we are going to do a little trick to loop music over our game. If we just played it normally, it would stop after the first time. By comparing the music's ```currentTime``` with its ```duration```, we can know when to play it again. We can also adjust the volume of the music if it is too loud.

I have marked a spot in ```map.js``` where you can add the code below.

Don't forget to add it to ```preload```!

``` javascript
music = game.assets['music/goodvibes.wav']
music.volume = 0.5
music.play()
game.addEventListener('enterframe', function() {
  if(music.currentTime >= music.duration ){
    music.play();
  }
});
```


## Making Your Own Sound Effects

There are some cool tools out there. Some of them can help you make your own sounds effects! I found one for you called [as3sfxr](http://bit.ly/as3sfxr)

## Your Last Assignment

Create a sound effect and play it when the ```pot``` falls into the ```pit```.


## Free time

Add some sounds to your own game.


## Extra Credit

I added some things to ```character.js```. One is called a ```hitbox```. We use hitboxes when we want to collide with an area smaller than the sprite.

I also added some ```sensors```. We use sensors to tell us more specific things about collisions. For example, I am using sensors so we can tell which side of ```character``` is colliding with something.

I added code to the ```movement``` function that makes ```character``` look like she is walking.

In various places, I am using ```.tl``` functions to animate things.

See if you can figure out how some of this stuff works, either by yourself or with a mentor. They are some advanced concepts you can use to make your game really cool.

