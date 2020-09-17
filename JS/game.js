class Game {
    constructor(){}

    //To read gameStates from the database
    getState(){
        var gsref=database.ref("gameState");
        gsref.on("value", function(data){ //function being created & simultaneously called
            gameState = data.val();
        });
    }

    //To write gameState into the database
    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

    start(){
        if(gameState === 0){ //WAIT state
            //new player object
            player=new Player();

            //reading playerCount from the database
            player.getCount();

            //new form object
            form=new Form();
            //display the form
            form.display();
        }
    }
}



