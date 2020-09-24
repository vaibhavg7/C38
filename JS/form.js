class Form {
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h3");
    }


    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 0);

       this.input.position(displayWidth/2-40,displayHeight/2-70);

       this.button.position(displayWidth/2+30,displayHeight/2);

       this.button.mousePressed(()=>{
        //Hide the this.input & this.button
         this.input.hide();
         this.button.hide();

         player.name=this.input.value();
        //Increasing the playerCount
         playerCount=playerCount+1;
         player.index=playerCount;
        //Updating the PC & name in the database
        player.update();
        player.updateCount(playerCount);
        //Displaying the greeting
         this.greeting.html("hello " + player.name);
         this.greeting.position(displayWidth/2-70,displayHeight/4);
         
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