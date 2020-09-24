class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }

    //To read playerCOunt form the database
    getCount(){
        var pcref=database.ref("playerCount");
        pcref.on("value",(data)=>{  //creating the function & calling it
            playerCount=data.val(); 
        })
    }

    //To write playerCount into the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    //To write the name in the database
    update(){
        //playerplayerCount player2
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance: this.distance
        });
    }

    //for allPlayers to keep the info of the players
    static getPlayerInfo(){
        var piref=database.ref("players");
        piref.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}

/*
gameState: 0
playerCount: 0
players:
    player1:
        name:
        distance:
    player2:
        name:
        distance
    .
    .


static functions
-
*/

