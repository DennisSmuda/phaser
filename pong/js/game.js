/***************************/
/**** Init *****************/
/***************************/
var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game_div');

/***************************/
/*** States ****************/
/***************************/
game.state.add('Load', Game.Load);
game.state.add('Boot', Game.Boot);
game.state.add('Menu', Game.Menu);
