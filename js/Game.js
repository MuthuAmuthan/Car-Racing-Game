class Game{
    constructor(){  }
    getState(){
        
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })

    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();
       
        }
        car1 = createSprite(200,200);
        car2 = createSprite(400,200);
        car3 = createSprite(600,200);
        car4 = createSprite(800,200);
        car = [car1,car2,car3,car4];
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
        car4.addImage(car4img);

    }
playing(){
    form.hide();
    text("game started",120,100);
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers!==undefined){
     //   playsound.play();
        background(groundimg);
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index = 0 ; 
            var x = 200;
            var y ;
             for(var p in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[p].distance;
                car[index-1].x=x;
                car[index-1].y=y;
                if(index === player.index){
                    fill("red");
                    ellipse(x,y,60,60)
                    car[index-1].shapeColor="red"
                    camera.position.x =displayWidth/2;
                    camera.position.y =car[index-1].y
                }
            }
   }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=10
            player.update();
            console.log(player.distance);

        }
        if(player.distance>3660){
            gameState = 2;
            player.rank+=1;
            player.updateCarsAtEnd(player.rank)

        }

         drawSprites();
}
end(){
form.end();
//playsound.stop();

}
}
