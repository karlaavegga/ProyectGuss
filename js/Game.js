class Game{
  constructor(){

  }

  start(){
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    player1 = createSprite(100, height/2 - 150);
    player1.shapeColor = "cyan"

    player2 = createSprite(100, height/2 + 150);
    player2.shapeColor = "lime"
    
    gamers = [player1, player2];

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  play(){
    
  }
  
}