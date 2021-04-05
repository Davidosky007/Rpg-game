import Phaser from 'phaser';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import UiScene from './scenes/uiScene';
import TitleScene from './scenes/titleScene';
import OptionsScene from './scenes/optionsScene';
import CreditsScene from './scenes/creditsScene';
import GuideScene from './scenes/guideScene';
import GameOver from './scenes/gameOverScene';
import Model from './classes/Model';
import ScoreScene from './scenes/scoreScene';
import config from './configs/config';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Guide', GuideScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Ui', UiScene);
    this.scene.add('GameOver', GameOver);
    this.scene.add('Score', ScoreScene);
    this.scene.start('Boot');

    const model = new Model();
    this.globals = { model, bgMusic: null };
  }
}

window.game = new Game();