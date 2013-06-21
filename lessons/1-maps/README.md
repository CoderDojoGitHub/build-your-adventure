# Lesson 1: Build a map

## What we're going to do

We're going to be slowly building an adventure game, kind of like Zelda. [Foli](http://warpspire.com/foli/) is a little game I made as an example. Really, the goal here is to experiment.

This first lesson is all about building maps and getting started.

## Getting set up

- Download [this lesson]() onto your computer

- Create a folder for your project and put the lesson files there

- Download Sublime Text 2 **[for Mac](http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.dmg)** or **[for Windows](http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1%20Setup.exe)**

- Open up `index.html` in your browser

### Map.js

`map.js` is where we're going to be working today. We've already set a basic template, so we can focus on learning one thing at a time. Today we're going to talk about drawing maps, which is done with **`map.loadData`**.

- Let's change some numbers to see what happens

### Sprites

This all works because of sprites.

![](https://f.cloud.github.com/assets/334891/667369/1839af70-d7f0-11e2-883c-5644b76137fc.png)

Sprites are little squares all squished into one image. We tell the framework which one to use, and it knows how to slice it up.

### Arrays

Arrays are one of the basic building blocks of programming. They're a lot like a list. They can have lots of things in them, like numbers or words.

- `[0, 1, 2, 3, 4]
- `["Hello", "my", "name", "is", "Kyle"]

Arrays can even have other arrays inside of them!

```
[
  [0, 1, 2, 3],
  [4, 5, 6, 7]
]
```

For our map, we use arrays to draw each line of the map.

## Your assignment

Now that we've gone over this, I want you to build an island in the water.

## Free time

- [Download our game template]()

- Move it into your project folder and give it a name

- Open up `game.js` and design your own map!
