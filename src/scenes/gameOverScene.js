import Phaser from 'phaser';
import Button from '../objects/Button';
import config from '../configs/config';
import { postScore } from '../objects/apiScore';
import sprImg from '../assets/sci1.png';
import gameOverTitle from '../assets/ui/blue_button02.png';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init() {
    this.model = this.sys.game.globals.model;
    this.gameScene = this.scene.get('Game');
  }

  preload() {
    this.load.image('gameOverTitle', gameOverTitle);
    this.load.image('sprImg', sprImg);
  }

  create() {
    const user = this.sys.game.globals.model.userName;

    this.add.image(this.game.config.width * 0.5, 240, 'sprImg').setScale(0.35);

    this.score = this.add.text(230, 30,
      `Hello ${user}, your score is: ${this.sys.game.globals.model.score}`, {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });

    postScore(this.model.userName, this.model.score);

    this.gameButton = new Button(this, 400, (config.height / 2) + 170,
      'blueButton1', 'blueButton2', 'Submit', 'Score');
  }
}