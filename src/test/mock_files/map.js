export default class Map {
  constructor(scene, key, titleSetName, bgLayerName, blockedLayerName) {
    this.scene = scene;
    this.key = key;
    this.titleSetName = titleSetName;
    this.bgLayerName = bgLayerName;
    this.blockedLayerName = blockedLayerName;
  }
}