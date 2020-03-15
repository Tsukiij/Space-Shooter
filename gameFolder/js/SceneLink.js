class SceneLink extends Phaser.Scene {
    constructor() {
        super({ key: "SceneLink" });
    }

    preload() {
        this.load.image("sprBg0", "content/sprBg0.png");
        this.load.image("sprBg1", "content/sprBg1.png");
        this.load.image("sprBtnPlay", "content/sprBtnPlay.png");
        this.load.image("sprBtnPlayHover", "content/sprBtnPlayHover.png");
        this.load.image("sprBtnPlayDown", "content/sprBtnPlayDown.png");
        this.load.image("sprBtnRestart", "content/sprBtnRestart.png");
        this.load.image("sprBtnRestartHover", "content/sprBtnRestartHover.png");
        this.load.image("sprBtnRestartDown", "content/sprBtnRestartDown.png");
        this.load.audio("sndBtnOver", "content/sndBtnOver.wav");
        this.load.audio("sndBtnDown", "content/sndBtnDown.wav");
    }

    create() {
        this.sfx = {
            btnOver: this.sound.add("sndBtnOver"),
            btnDown: this.sound.add("sndBtnDown")
        }

        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.7,
            "sprBtnPlay"
        );

        this.btnPlay.setInteractive();

        this.btnPlay.on("pointerover", function () {
            this.btnPlay.setTexture("sprBtnPlayHover");
            this.sfx.btnOver.play();
        }, this);

        this.btnPlay.on("pointerout", function () {
            this.setTexture("sprBtnPlay");
        });

        this.btnPlay.on("pointerdown", function () {
            this.btnPlay.setTexture("sprBtnPlayDown");
            this.sfx.btnDown.play();
        }, this);

        this.btnPlay.on("pointerup", function () {
            this.btnPlay.setTexture("sprBtnPlay");
        }, this);

        this.btnPlay.on("pointerup", function () {
            this.btnPlay.setTexture("sprBtnPlay");
            // this.scene.resume("SceneMain");
            this.scene.switch("SceneMain")
        }, this);

        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 20);
        graphics.lineTo(config.width - 25, 25);
        graphics.lineTo(config.width - 25, 430);
        graphics.lineTo(25, 430);
        graphics.lineTo(25, 25)
        graphics.closePath();
        graphics.fillPath();

        var content = ["LEARN MORE ABOUT COVID-19", "",
            "Symptoms of COVID-19 can include",
            "~ Fever", "~ Cough", "~ Shortness of breath", "",
            "The symptoms may appear in as few as two days or as long as 14 days after exposure.",
            "Reported illnesses have ranged from people with little to no symptoms to people being severely ill and dying.",
            " ", "https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx"]

        this.title = this.add.text(this.game.config.width * 0.5, 220, content, {
            fontFamily: 'monospace',
            fontSize: 20,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 450, useAdvancedWrap: true }
        });
        this.title.setOrigin(0.5);

        this.backgrounds = [];
        for (var i = 0; i < 5; i++) {
            var keys = ["sprBg0", "sprBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var bg = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(bg);
        }
    }

    update() {
        for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update();
        }
    }
}