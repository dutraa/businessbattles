//RI Business Battles

//What scene the player is on
var currentScene = 1;

//Player Turn
var playerTurn = 0;

//Time Variables
var timer1 = 0;
var timer2 = 0;
var timer3 = 0;
var timer4 = 0;

//Moves Function
var moveNum = 0;

//Piplup Varibales
var piplupX = 260;
var piplupY = 135;
var piplupH = 25;

//Elekid Variables
var elekidX = 200;
var elekidY = 200;
var elekidH = 50;

//Fight Button
var fightBtn = false; 

//Starting Text X
var startText = 20;

//PlayerX Location
var playerX = -290;

//Player Health Bar
var playerH = 100;

//Player Box Position
var playerB = -340;

//EnemyX Location
var enemyX = -130;

//Enemy Health Bar
var enemyH = 100;

//Enemy Box Position
var enemyB = -180;

//Elekid
var elekid = function(elekidX, elekidY, elekidH) {

//Right Arm
stroke(0, 0, 0);
fill(245, 202, 10);
ellipse(elekidX + elekidH/50 * 52,elekidY + elekidH/50 * 0,elekidH + elekidH/50 * 5,elekidH - elekidH/50 * 33);

//Left Arm
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 55,elekidY + elekidH/50 * 0,elekidH + elekidH/50 * 5,elekidH - elekidH/50 * 33);

//Left Arm Top
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 76,elekidY - elekidH/50 * 28,elekidH - elekidH/50 * 28,elekidH + elekidH/50 * 20);

//Left Arm Top
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 76,elekidY - elekidH/50 * 28,elekidH - elekidH/50 * 28,elekidH + elekidH/50 * 20);

//Right Foot
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 30,elekidY + elekidH/50 * 85,elekidH - elekidH/50 * 5,elekidH - elekidH/50 * 25);

//Left Foot
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 30,elekidY + elekidH/50 * 85,elekidH - elekidH/50 * 5,elekidH - elekidH/50 * 25);

//Right Foot Detail
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 22,elekidY + elekidH/50 * 83,elekidH - elekidH/50 * 22,elekidH - elekidH/50 * 34);

//Left Foot Detail
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 22,elekidY + elekidH/50 * 83,elekidH - elekidH/50 * 22,elekidH - elekidH/50 * 35);

//Left Leg
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 20,elekidY + elekidH/50 * 50,elekidH - elekidH/50 * 35,elekidH + elekidH/50 * 20);

//Left Leg
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 20,elekidY + elekidH/50 * 50,elekidH - elekidH/50 * 35,elekidH + elekidH/50 * 20);

//Body
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 0,elekidY + elekidH/50 * 0,elekidH + elekidH/50 * 40,elekidH + elekidH/50 * 70);

//Body Detail

//Black Top
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 0,elekidY + elekidH/50 * 21,elekidH + elekidH/50 * 33,elekidH - elekidH/50 * 75);

//Yellow Top
noStroke();
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 0,elekidY + elekidH/50 * 13,elekidH + elekidH/50 * 33,elekidH - elekidH/50 * 75);

//Black Bottom
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 0,elekidY + elekidH/50 * 46,elekidH + elekidH/50 * 8,elekidH - elekidH/50 * 64);

//Yellow Bottom
noStroke();
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 0,elekidY + elekidH/50 * 40,elekidH + elekidH/50 * 8,elekidH - elekidH/50 * 60);

//Right Volt
stroke(0, 0, 0);
fill(245, 237, 8);
rect(elekidX - elekidH/50 * 30, elekidY - elekidH/50 * 110, elekidH - elekidH/50 * 25, elekidH + elekidH/50 * 25);

//Left Volt
strokeWeight(1);
fill(245, 237, 8);
rect(elekidX + elekidH/50 * 5, elekidY - elekidH/50 * 110, elekidH - elekidH/50 * 25, elekidH + elekidH/50 * 25);

//Left Volt Top
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 17,elekidY - elekidH/50 * 108,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 35);

//Right Volt Top
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 108,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 35);

//Left Volt Top Detail
noStroke();
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 17,elekidY - elekidH/50 * 105,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 35);

//Right Volt Top Detail
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 104,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 35);

//Final Right Volt Detail
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 20,elekidY - elekidH/50 * 31,elekidH - elekidH/50 * 20,elekidH - elekidH/50 * 18);
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 65,elekidH - elekidH/50 * 22);
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 62,elekidH - elekidH/50 * 26);
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 58,elekidH - elekidH/50 * 31);
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 56,elekidH - elekidH/50 * 33);

//Final Left Volt Detail
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 13,elekidY - elekidH/50 * 31,elekidH - elekidH/50 * 18,elekidH - elekidH/50 * 14);
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 65,elekidH - elekidH/50 * 22);
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 11,elekidY - elekidH/50 * 44,elekidH - elekidH/50 * 18,elekidH - elekidH/50 * 14);
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 62,elekidH - elekidH/50 * 26);
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 58,elekidH - elekidH/50 * 31);
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 18,elekidY - elekidH/50 * 87,elekidH - elekidH/50 * 56,elekidH - elekidH/50 * 33);

//Left Arm Fill
noStroke();
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 54,elekidY + elekidH/50 * 0,elekidH + elekidH/50 * 5,elekidH - elekidH/50 * 34);

//Right Arm Fill
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 54,elekidY + elekidH/50 * 0,elekidH + elekidH/50 * 5,elekidH - elekidH/50 * 34);

//Right Arm Black Marks
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 77,elekidY - elekidH/50 * 13,elekidH - elekidH/50 * 29,elekidH - elekidH/50 * 62);
fill(0, 0, 0);
ellipse(elekidX - elekidH/50 * 76,elekidY - elekidH/50 * 34,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 62);
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 76,elekidY - elekidH/50 * 18,elekidH - elekidH/50 *30,elekidH - elekidH/50 * 62);
fill(245, 237, 8);
ellipse(elekidX - elekidH/50 * 76,elekidY - elekidH/50 * 38,elekidH - elekidH/50 * 29,elekidH - elekidH/50 * 62);

//Right Arm Black Marks
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 77,elekidY - elekidH/50 * 13,elekidH - elekidH/50 * 29,elekidH - elekidH/50 * 62);
fill(0, 0, 0);
ellipse(elekidX + elekidH/50 * 76,elekidY - elekidH/50 * 34,elekidH - elekidH/50 * 26,elekidH - elekidH/50 * 62);
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 76,elekidY - elekidH/50 * 18,elekidH - elekidH/50 * 30,elekidH - elekidH/50 * 62);
fill(245, 237, 8);
ellipse(elekidX + elekidH/50 * 76,elekidY - elekidH/50 * 38,elekidH - elekidH/50 *29,elekidH - elekidH/50 * 62);
};

//Piplup
var piplup = function(piplupX,piplupY,piplupH) {
stroke(0, 0, 0);

//Left Foot 
strokeWeight(1);
fill(252, 190, 5);
ellipse(piplupX - piplupH/50 * 25,piplupY + piplupH/50 * 55,piplupH/50 * 25,piplupH/50 *35);

//Arms 
fill(167, 211, 235);
ellipse(piplupX - piplupH/ 50 * 65,piplupY + piplupH/50 * -15,piplupH/50 * 70,piplupH/50 * 30);
ellipse(piplupX + piplupH/50 * 65,piplupY -piplupH/50 * 15,piplupH/50 * 70,piplupH/50 * 30);

//Body
strokeWeight(1);
fill(167, 211, 235);
ellipse(piplupX + piplupH/50,piplupY - piplupH/50 * 8,piplupH/50 * 125,piplupH/50 * 136);
//Bright Blue Circles
fill(79, 168, 240);
ellipse(piplupX - piplupH/50 * 25,piplupY - piplupH/50 * 40,piplupH/50 * 40,piplupH/50 * 30);
ellipse(piplupX + piplupH/50 * 25,piplupY - piplupH/50 * 40,piplupH/50 * 40,piplupH/50 * 30);
//White Circles
fill(255, 255, 255);
ellipse(piplupX - piplupH/50 * 25,piplupY + piplupH/50,piplupH/50 * 15,piplupH/50 * 15);
ellipse(piplupX + piplupH/50 * 25,piplupY - piplupH/50,piplupH/50 * 15,piplupH/50 * 15);

//Right Foot 
strokeWeight(1);
fill(252, 190, 5);
ellipse(piplupX + piplupH/50 * 25,piplupY + piplupH/50 * 56,piplupH/50 * 25,piplupH/50 * 35);

//Head
strokeWeight(1);
//Top Bright Blue
fill(79, 168, 240);
ellipse(piplupX + piplupH/50,piplupY - piplupH/50 * 90,piplupH/50 * 125,piplupH/50 * 105);
//White part of face
fill(255, 255, 255);
ellipse(piplupX - piplupH/50 * 32,piplupY - piplupH/50 * 88,piplupH/50 * 61,piplupH/50 * 74);
ellipse(piplupX + piplupH/50 * 32,piplupY - piplupH/50 * 88,piplupH/50 * 61,piplupH/50 * 74);
noStroke();
ellipse(piplupX + piplupH/50,piplupY - piplupH/50 * 69,piplupH/50 * 98,piplupH/50 * 61);
//Triangles
fill(0, 0, 0);
triangle(piplupX - piplupH/50 * 9,piplupY - piplupH/50 * 110,piplupX - piplupH/50 * 0, piplupY - piplupH/50 * 80,piplupX + piplupH/50 * 9,piplupY - piplupH/50 * 110);
triangle(piplupX - piplupH/50 * 10,piplupY - piplupH/50 * 110,piplupX- piplupH/50 * 0, piplupY - piplupH/50 * 122,piplupX + piplupH/50 * 10,piplupY - piplupH/50 * 110);
fill(167, 211, 235);
triangle(piplupX - piplupH/50 * 6,piplupY - piplupH/50 * 110,piplupX - piplupH/50 * 0, piplupY - piplupH/50 * 80,piplupX + piplupH/50 * 6,piplupY - piplupH/50 * 110);
triangle(piplupX - piplupH/50 * 6,piplupY - piplupH/50 * 110,piplupX - piplupH/50 * 0,piplupY - piplupH/50 * 122,piplupX + piplupH/50 * 6,piplupY - piplupH/50 * 110);
//Beak
fill(0, 0, 0);
ellipse(piplupX + piplupH/50 * 0 - piplupH/50 * 0,piplupY - piplupH/50 * 81,piplupH/50 * 23,piplupH/50 * 17);
ellipse(piplupX + piplupH/50 * 0 - piplupH/50 * 0,piplupY - piplupH/50 * 76,piplupH/50 * 22,piplupH/50 * 17);
fill(252, 190, 5);
ellipse(piplupX + piplupH/50 * 0,piplupY - piplupH/50 * 81,piplupH/50 * 20,piplupH/50 * 15);
fill(252, 190, 5);
ellipse(piplupX + piplupH/50 * 0,piplupY - piplupH/50 * 76,piplupH/50 * 20,piplupH/50 * 15);
fill(0,0,0);
ellipse(piplupX + piplupH/50 * 0,piplupY - piplupH/50 * 81,piplupH/50 * 18,piplupH/50 * 13);
fill(252, 190, 5);
ellipse(piplupX + piplupH * 0,piplupY - piplupH/50 * 82,piplupH/50 * 20,piplupH/50 * 12);

//Eyes
//Black Part
fill(0, 0, 0);
ellipse(piplupX - piplupH/50 * 32,piplupY - piplupH/50 * 88,piplupH/50 * 20,piplupH/50 * 40);
ellipse(piplupX + piplupH/50 * 32,piplupY - piplupH/50 * 88,piplupH/50 * 20,piplupH/50 * 40);
//White Part
fill(255, 255, 255);
ellipse(piplupX - piplupH/50 * 32,piplupY - piplupH/50 * 97,piplupH/50 * 10,piplupH/50 * 15);
ellipse(piplupX + piplupH/50 * 32,piplupY - piplupH/50 * 97,piplupH/50 * 10,piplupH/50 * 15);
};

//Still Playing 
var stillPlaying = true; 

//Player Turn
var playerTurn = 0;

//Makes the start button
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

//Khan Class Button
Button.prototype.draw = function() {
    fill(235, 240, 240);
    stroke(10, 10, 10);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(5, 5, 5);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+3, this.y+this.height/4);
};
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
        mouseX < (this.x + this.width) &&
        mouseY > this.y &&
        mouseY < (this.y + this.height);
};
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Button 1 (Battle)
var btn1 = new Button({
    x: 150,
    y: 310,
    width: 60,
    label: "Battle!",
    onClick: function() {
        currentScene = 2; 
    }
});

//Button 2 (Fight)
var btn2 = new Button({
    x: 245,
    y: 315,
    width: 70,
    height: 50,
    label: "FIGHT!",
    onClick: function() {
        fightBtn = true;
    }
});

//Button 3 (Thunder)
var btn3 = new Button({
    x: 145,
    y: 300,
    width: 100,
    height: 40,
    label: "Thunder",
    onClick: function() {
        moveNum = 1;
        enemyH -= 30;
       
    }
});

//Button 4 (Fire Punch)
var btn4 = new Button({
    x: 250,
    y: 300,
    width: 100,
    height: 40,
    label: "Fire Punch",
    onClick: function() {
        moveNum = 2;
        enemyH -= 15;
    }
});

//Button 5 (Tackle)
var btn5 = new Button({
    x: 250,
    y: 350,
    width: 100,
    height: 40,
    label: "Tackle",
    onClick: function() {
        moveNum = 3;
        enemyH -= 20;
    }
});

//Button 6 (Recover)
var btn6 = new Button({
    x: 145,
    y: 350,
    width: 100,
    height: 40,
    label: "Recover",
    onClick: function() {
        moveNum = 4;
        playerH += 20;
        
    }
});

//Scene 1 (Splash Screen)
var scene1 = function(){
    
//constrains canvas to 360 pixels for apps
background(8, 8, 8);
noStroke();
       
//black fill same as webpage
fill(0, 0, 0);
       
//rectangle over 40 right-most pixels
rect(360,0,40,400);
stroke(255, 255, 255);

//Title
fill(65, 120, 232);
textSize(35);
text("Khan Pokemon",79,40);
fill(223, 247, 5);
textSize(35);
text("Khan Pokemon",75,40);

//Author
fill(252, 252, 252);
textSize(15);
text("By: Evan DeBassio & Adam Cabral", 65,100);

//Instructions
noStroke();
fill(223, 247, 5);
rect(35,130,290,150);
fill(5, 5, 5);
text("-Defeat your opponent! ",40,135,200,30);
text("-Select from four abilities to attack!",40,165,275,35);
text("-The last Pokemon standing wins!",40,200,200,50);
text("-Press battle to begin!", 40,250,200,30);
};

//Scene 2
var scene2 = function(){
    //Flashing Screen
    background(255, 255, 255);
    timer1=timer1+1;
        if(timer1===1){background(0, 0, 0);}
        if(timer1===7){background(38, 38, 38);}
        if(timer1===13){background(117, 117, 117);}
        if(timer1===19){background(156, 156, 156);}
        if(timer1===25){background(224, 224, 224);}
        if(timer1===31){timer1=0; timer2++;}
        if(timer2 > 1) {currentScene = 3;}
        
        //black fill same as webpage
        fill(0, 0, 0);
       
        //rectangle over 40 right-most pixels
        rect(360,0,40,400);
        stroke(255, 255, 255);
};

//Scene 3
var scene3 = function(){

//constrains canvas to 360 pixels for apps
background(199, 240, 189);
fill(152, 221, 230);
rect(0,0,360,75);
noStroke();
       
//black fill same as webpage
fill(0, 0, 0);
       
//rectangle over 40 right-most pixels
rect(360,0,40,400);
stroke(255, 255, 255);

//Makes the bushes in the background
for(var grass = 0; grass < 8; grass ++) {
    image(getImage("cute/TreeShort"),grass * 45,30,50,75);
}

//Enemy Name and Health Bar
fill(0, 0, 0);
rect(16 + enemyB, 46, 148,68);
fill(224, 220, 220);
rect(18 + enemyB, 48, 144,64);
fill(0, 0, 0);
textSize(20);
text("Piplup",25 + enemyB,55);
textSize(11);
text("HP " + enemyH + "/100",25 + enemyB,80); 
fill(252, 5, 5);
rect(22 + enemyB,95,130,5);
fill(37, 222, 20);
rect(22 + enemyB,95,enemyH * 1.3,5);

//Player Name and Health Bar
fill(0, 0, 0);
rect(175 + playerB, 185, 148,68);
fill(224, 220, 220);
rect(177 + playerB, 187, 144,64);
fill(0, 0, 0);
textSize(20);
text("Elekid",183 + playerB,190);
textSize(11);
text("HP " + playerH + "/100",185 + playerB,215); 
fill(252, 5, 5);
rect(180 + playerB,233,130,5);
fill(37, 222, 20);
rect(180 + playerB,233,playerH * 1.3,5);

//Menu
fill(0, 0, 0);
rect(0, 285, 360,120);
fill(224, 220, 220);
rect(2, 287, 356,110);
fill(0, 0, 0);
textSize(18);
text("A wild Piplup Appeared!",15,300);
text("Go Elekid!",15,330);

};

//Scene 4
var scene4 = function(){
    //constrains canvas to 360 pixels for apps
background(8, 8, 8);
noStroke();
       
//black fill same as webpage
fill(0, 0, 0);
       
//rectangle over 40 right-most pixels
rect(360,0,40,400);
stroke(255, 255, 255);

//Title
fill(65, 120, 232);
textSize(35);
text("You Win!",125,130);
fill(223, 247, 5);
textSize(35);
text("You Win!",121,130);

//Text
fill(255,255,255);
textSize(14);
text("Press the restart button or refresh the page to play again!",20,175);

};

//Scene 5
var scene5 = function(){
    //constrains canvas to 360 pixels for apps
background(8, 8, 8);
noStroke();
       
//black fill same as webpage
fill(0, 0, 0);
       
//rectangle over 40 right-most pixels
rect(360,0,40,400);
stroke(255, 255, 255);

//Title
fill(65, 120, 232);
textSize(35);
text("Your Pokemon fainted!",29,130);
fill(223, 247, 5);
textSize(35);
text("Your Pokemon fainted!",25,130);
fill(255,255,255);

//Text
textSize(14);
text("Press the restart button or refresh the page to play again!",20,175);

};

//All Moves
var allMoves = function() { 
       fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
        
        btn3.draw();
        btn4.draw();
        btn5.draw();
        btn6.draw();
};

//Thunder
var Thunder = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Elekid used Thunder!",15, 300, 200, 318);
            text("It's super effective!",15, 330, 200, 318);
};

//Fire Punch
var FirePunch = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Elekid used Fire Punch!",15, 300, 230, 318);
            text("It's not very effective!",15, 330, 200, 318);
};

//Tackle
var Tackle = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Elekid used Tackle!",15, 300, 230, 318);
};

//Recover 
var Recover = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Elekid used Recover!",15, 300, 230, 318);
};

//Pound 
var Pound = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Piplup used Pound!",15, 300, 230, 318);
           
};

//Bubble
var Bubble = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Piplup used Bubble!",15, 300, 230, 318);
            
};

//Peck 
var Peck= function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Piplup used Peck!",15, 300, 230, 318);
            text("It's not very effective!",15, 330, 200, 318);
            
};

//Drill Run 
var Drill_Run = function() {
    fill(0, 0, 0);
            rect(0, 286, 360,109);
            fill(224, 220, 220);
            rect(0, 286, 360,113);
            fill(0, 0, 0);
            text("Piplup used Drill Run!",15, 300, 230, 318);
            text("It's super effective!",15, 330, 200, 318);
            
};

//Khan Class Button
mouseReleased = function() {
    if(currentScene === 1) {
    btn1.handleMouseClick();
    }
        else if(fightBtn === false) {
        btn2.handleMouseClick();
        }
            else if(fightBtn === true) {
            btn3.handleMouseClick();
            btn4.handleMouseClick();
            btn5.handleMouseClick();
            btn6.handleMouseClick();
            }
};

//Draw function which calls on the functions written above to be drawn
draw = function() {
    
    //draws the starting screen
    if (currentScene === 1) {
        scene1();
        btn1.draw();
    }
    //draws the flashing screen
    else if(currentScene === 2) {
        scene2();
    } 
        //if the button is clicked, it brings the player to the game
    else if(currentScene === 3) {
        scene3();
        
        //Player health cannot go over 100
        if(playerH >= 100) {playerH = 100;}
        
        //Enemy Animation
        if (enemyX < 245) {
        enemyX += 10;
}
        //Enemy Animation
        if (enemyX > 244 && enemyB < 10) {enemyB += 10;}
        piplup(enemyX,135,25);
        
        //Player Animation
        if (enemyX > 244 && playerB < 10) {playerB += 5;}
        elekid(playerX,205,35);
        
        //Player Animation
        if(enemyX > 244 && playerX < 85) {playerX += 5;}
       
        //Battle Animations and Abilities of Pokemon when used
        btn2.draw();
        if(fightBtn === true) { 
            if(moveNum === 0) {allMoves(); timer4 = 0; playerTurn = 0;}
                 
            //When the user uses Thunder, the thunder function is drawn    
            else if(moveNum === 1) {Thunder();
                timer3 ++;
            
            //Timer between the next text    
            if(timer3 > 100) {
                
                //When Thunder is used the enemy uses Peck         
                if(playerTurn === 0) {
                    playerH -= 15;playerTurn = 1;} 
                    Peck(); timer4++; 
                    
                    //Brings the user back to the four moves
                    if(timer4 > 100) { 
                        moveNum = 0; timer3 = 0;}
                    }
            }
                //When the user uses Fire Punch, the Fire Punch function is drawn
                else if(moveNum === 2) {FirePunch();
                timer3 ++;
                
                //Timer before the next text is displayed
                if(timer3 > 100) {
                
                //When the player uses Fire Punch, the enemy uses Drill Run         
                if(playerTurn === 0) {
                    playerH -= 30;playerTurn = 1;} 
                    Drill_Run(); timer4++; 
                    
                    //Brings the player back to the four moves
                    if(timer4 > 100) { 
                        moveNum = 0; timer3 = 0;}
                    }
            }
            
            //When the player uses Tackle, the Tackle function is drawn
            else if(moveNum === 3) {Tackle();
                timer3 ++;
                
                //Timer bewteen next text
                if(timer3 > 100) {
                
                //When the user uses Tackle, the enemy uses Pound         
                if(playerTurn === 0) {
                    playerH -= 20;playerTurn = 1;} 
                    Pound(); timer4++; 
                    
                    //Brings the player back to the four moves
                    if(timer4 > 100) { 
                        moveNum = 0; timer3 = 0;}
                    }
        }
        
        //When the user uses Recover, the Recover function is drawn
        else if(moveNum === 4) {Recover();
                timer3 ++;
                
                //Timer between next text
                if(timer3 > 100) {
                
                //When the user uses Recover, the enemy uses Bubble         
                if(playerTurn === 0) {
                    playerH -= 15; playerTurn = 1;} 
                    Bubble(); timer4++; 
                    
                    //Brings the player back to the four moves
                    if(timer4 > 100) { 
                        moveNum = 0; timer3 = 0;}
                    }
                }
        }
        
    }
    
    //If the enemy's health hits zero, scene four is drawn, which is the win screen
    if(enemyH <= 0 && currentScene === 3) {
        currentScene = 4;
        scene4();
    }
    
    //If the player's health hits zero, scene five is drawn, which is the defeated        screen
    
    if(playerH <= 0 && currentScene === 3) {
        currentScene = 5;
        scene5();
    }
};