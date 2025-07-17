sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -5
})
let projectiles: Sprite = null
let mySprite: Sprite = null
mySprite.setBounceOnWall(true)
projectiles.follow(mySprite)
projectiles = sprites.create(assets.image`bomb`, SpriteKind.Projectile)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`tristate_01`)
