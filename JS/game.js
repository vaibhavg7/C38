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

    async start(){
        if(gameState === 0){ //WAIT state
            //new player object
            player=new Player();
            var pcRef=await database.ref("playerCount").once("value");
            if(pcRef.exists()){
                playerCount = pcRef.val();
            //reading playerCount from the database
            player.getCount();
            }
            //new form object
            form=new Form();
            //display the form
            form.display();
        }

        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4];
    }

    play(){
        //form gets hidden
        form.hide();
    
        textSize(35);
        text("Game Start", 120, 100)

        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            //var text_pos = 130;
            //Identifying currently active player
            var x=0;
            var y;
            var ci=0;
            for(var i in allPlayers){
                /*
                text_pos = text_pos + 20;
                if(i==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                //text(player name : player distance)
                textSize(15);
                text(allPlayers[i].name + ": "+ allPlayers[i].distance,120,text_pos)
                */
                ci=ci+1;
                x=x+200;
                y=displayHeight-allPlayers[i].distance;
                cars[ci-1].x=x;
                cars[ci-1].y=y;

                if(ci===player.index){
                    cars[ci-1].shapeColor="red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[ci-1].y;
                }
            }
            
        }

      if(keyIsDown(UP_ARROW)&& player.index!==null) {
        player.distance=player.distance+50;
        player.update();
      } 
    drawSprites();
    }
}

/*
for(var i = 0; i< array.length; i = i + 1){}

for/in statement
for(var in array){}
*/



