import Phaser from 'phaser';
import blueButton1 from '../assets/ui/blue_button02.png';
import blueButton3 from '../assets/ui/blue_button03.png';
import phaserLogo from '../assets/logo.png';
import box from '../assets/ui/grey_box.png';
import checkedBox from '../assets/ui/blue_boxCheckmark.png';
import upKey from '../assets/commands/KeyboardButtonsDir_up.png';
import downKey from '../assets/commands/KeyboardButtonsDir_down.png';
import leftKey from '../assets/commands/KeyboardButtonsDir_left.png';
import rightKey from '../assets/commands/KeyboardButtonsDir_right.png';
import spaceKey from '../assets/commands/OnscreenKeyboardButtonsSpace.png';
import upKey0 from '../assets/commands/KeyboardButtonsDir_up0.png';
import downKey0 from '../assets/commands/KeyboardButtonsDir_down0.png';
import leftKey0 from '../assets/commands/KeyboardButtonsDir_left0.png';
import rightKey0 from '../assets/commands/KeyboardButtonsDir_right0.png';
import spaceKey0 from '../assets/commands/OnscreenKeyboardButtonsSpace0.png';
import bgMusic from '../assets/fato_shadow_-_last_angel.mp3';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      // eslint-disable-next-line
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton3);
    this.load.image('phaserLogo', phaserLogo);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox);
    this.load.image('upKey', upKey);
    this.load.image('downKey', downKey);
    this.load.image('leftKey', leftKey);
    this.load.image('rightKey', rightKey);
    this.load.image('spaceKey', spaceKey);
    this.load.image('upKey0', upKey0);
    this.load.image('downKey0', downKey0);
    this.load.image('leftKey0', leftKey0);
    this.load.image('rightKey0', rightKey0);
    this.load.image('spaceKey0', spaceKey0);
    this.load.audio('bgMusic', [bgMusic]);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}