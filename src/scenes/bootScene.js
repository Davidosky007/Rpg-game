import Phaser from 'phaser';
import logo from '../assets/logo.png';
import button1 from '../assets/images/ui/blue_button01.png';
import background from '../assets/level/background-extruded.png';
import items from '../assets/images/items.png';
import characters from '../assets/images/characters.png';
import monsters from '../assets/images/monsters.png';
import goldSound from '../assets/audio/Pickup.wav';
import enemyDeath from '../assets/audio/EnemyDeath.wav';
import playerAttack from '../assets/audio/PlayerAttack.wav';
import playerDamage from '../assets/audio/PlayerDamage.wav';
import playerDeath from '../assets/audio/PlayerDeath.wav';

const mapJSON = require('../assets/level/large_level1.json');

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.loadImages();
    this.loadSpriteSheets();
    this.loadAudio();
    this.loadTileMap();
  }

  loadImages() {
    this.load.image('logo', logo);
    this.load.image('button1', button1);
    this.load.image('background', background);
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', characters, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', monsters, { frameWidth: 32, frameHeight: 32 });
  }

  loadAudio() {
    this.load.audio('goldSound', [goldSound]);
    this.load.audio('enemyDeath', [enemyDeath]);
    this.load.audio('playerAttack', [playerAttack]);
    this.load.audio('playerDamage', [playerDamage]);
    this.load.audio('playerDeath', [playerDeath]);
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', mapJSON);
  }

  create() {
    this.scene.start('Preloader');
  }
}