var config = {
    type: Phaser.WEBGL,
    width: 500,
    height: 660,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [SceneMainMenu,
        SceneMain,
        SceneLink,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
}
var game = new Phaser.Game(config);