class Player {
    constructor(){}

    //To read playerCOunt form the database
    getCount(){
        var pcref=database.ref("playerCount");
        pcref.on("value",function(data){  //creating the function & calling it
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
    update(name){
        //playerplayerCount player2
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }
}

