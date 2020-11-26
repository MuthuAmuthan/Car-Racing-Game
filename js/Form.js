class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
        this.greeting2 = createElement('h2');

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

    display(){
       
        this.title.html("Car Racing Game");
        this.title.position(130, 0);

       
        this.input.position(130, 160);
        this.button.position(250, 200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index=playerCount ;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130, 160);
        });



    }
    end(){
        if(player.rank>=4){
            var reset = createButton('Reset');
            reset.position(displayWidth-200,20)
    
        
        reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            player.updateCarsAtEnd(0)
            var playerRef = database.ref('players');
            playerRef.remove();
    
        })


        }

    this.greeting2.html("congralulations " + player.name+ "Your rank is " + player.rank)
    this.greeting2.position(displayWidth/2-100,displayHeight/2-100)

}
}