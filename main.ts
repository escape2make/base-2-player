namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
let left = sprites.create(assets.image`left`, SpriteKind.Player)
controller.player1.moveSprite(left, 0, 100)
left.left = 0
left.setStayInScreen(true)
let right = sprites.create(assets.image`right`, SpriteKind.Player)
controller.player2.moveSprite(left, 0, 100)
right.right = scene.screenWidth()
right.setStayInScreen(true)
let ball = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Ball)
ball.setFlag(SpriteFlag.BounceOnWall, true)
ball.setVelocity(50, 10)
