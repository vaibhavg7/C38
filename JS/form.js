class Form {
    constructor(){}


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

       var input=createInput("name");
       input.position(130,160);

       var button=createButton("play");
       button.position(250,200);

       var greeting=createElement("h3");

       button.mousePressed(function(){
        //Hide the input & button
         input.hide();
         button.hide();

         var name=input.value();
        //Increasing the playerCount
         playerCount=playerCount+1;
        //Updating the PC & name in the database
        player.update(name);
        player.updateCount(playerCount);
        //Displaying the greeting
         greeting.html("hello " + name);
         greeting.position(130,160);
         
    }
    );
        
    }
}
//"string" + variable
/*
HTML
1. Head - scripts/files/libraries
2. Body - Main content to be displayed

Body: Elements 
    - Headings of different sizes (h1, h2, h3)
    - Input : takes input from the user
    - Button : Play button

Docuement Object Model (DOM) - p5 Dom Library

Title : "Car Racing Game"
- create an h2 element
- change the html content
- position
*/