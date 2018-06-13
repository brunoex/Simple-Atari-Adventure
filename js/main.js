//TODO -> Instanciate all objects

function el(id){
	return document.getElementById(id);
}

//Character moviment begin --- 
var pressed_keys = [-1,-1];
var runspeed = 5;
//Level creation
var level = 1;
var has_key = 0;
var create_lvl2 = 0;
var create_lvl3 = 0;
var create_lvl4 = 0;
var create_lvl5 = 0;
var gameover_if = 0;
//Time management
var starttime;

//Main charater
var character_obj = {
    x       : 470,//initial position for character
    y       : 300,
    w       : 40,// how high?
    h       : 40,

    make:(function(){}),
    
    move:(function(){
    //Character moviment    
    if(pressed_keys[0] == 37){this.x -= runspeed;}//x
    if(pressed_keys[0] == 39){this.x += runspeed;}//x
    
    if(pressed_keys[1] == 38){this.y -= runspeed;}//y
    if(pressed_keys[1] == 40){this.y += runspeed;}//y
        
    //Screen limits 
    if(this.x > 960){this.x = 960;}
    if(this.x < 50){this.x = 50;}
    if(this.y > 760){this.y = 760;}
    if(this.y < 50){this.y = 50;}
            
    el("character").style.left = this.x + "px";
    el("character").style.top = this.y + "px";
        
    })
}

//Shadow on level 4
var character_over = {
    x       : 770,//initial position for character
    y       : 370,
    w       : 300,// how high?
    h       : 300,

    move:(function(){
     
    el("overflow").style.left = this.x +"px";
    el("overflow").style.top = this.y +"px";
    
    el("overflow").style.width = this.w +"px";
    el("overflow").style.height = this.h +"px";
        
    //make overflow run with character - Coool!
    character_over.x = character_obj.x - 130;
    character_over.y = character_obj.y - 130;    
    })
}
//key functions 
function keyboard (e){
    var t_code = e.keyCode; 
    if(t_code == 37){pressed_keys[0] = 37;}//x
    if(t_code == 39){pressed_keys[0] = 39;}//x
    
    if(t_code == 38){pressed_keys[1] = 38;}//y
    if(t_code == 40){pressed_keys[1] = 40;}//y
    
}

function up (){
    pressed_keys[0] = -1;
    pressed_keys[1] = -1;
}

//Level and objekts ---
var wall = {
    x : 400,//initial position for character
    y : 780,
    w : 200,// how high?
    h : 70,
    
    move:(function(){ 
    
        el("parede").style.left = this.x + "px";
        el("parede").style.top = this.y + "px";
        
    })
    
}
var bigdoor = {
    x : 990,//initial position for character
    y : 250,
    w : 60,// how high?
    h : 400,
    
    move:(function(){ 
        el("bigdoor").style.left = this.x + "px";
        el("bigdoor").style.top = this.y + "px"; 
                
    })
    
}
var smalldoor = {
    x : 0,//initial position for character
    y : 450,
    w : 60,// how high?
    h : 200,
    
    move:(function(){ 
        el("smalldoor").style.left = this.x + "px";
        el("smalldoor").style.top = this.y + "px";   
    })
    
}
//level 3 object
var castledoor = {
    x : -500,//initial position for character
    y : -500,
    w : 70,// how high?
    h : 70,
    
    move:(function(){ 
      el("castledoor").style.left = this.x + "px";
      el("castledoor").style.top = this.y + "px";  
    })
    
}
//Maze objects for level 4
var maze = {
    x : 0,//initial position
    y : 0,
    w : 400,// how high?
    h : 70,
    
    move:(function(){ 
      el("maze").style.left = this.x + "px";
      el("maze").style.top = this.y + "px";  
    })
    
}
var maze1 = {
    x : 0,//initial position
    y : 0,
    w : 70,// how high?
    h : 300,
    
    move:(function(){ 
      el("maze1").style.left = this.x + "px";
      el("maze1").style.top = this.y + "px";  
    })
    
}
var maze2 = {
    x : 0,//initial position
    y : 0,
    w : 70,// how high?
    h : 600,
    
    move:(function(){ 
      el("maze2").style.left = this.x + "px";
      el("maze2").style.top = this.y + "px";  
    })
    
}
//level 5 objects
var monster = {
    x : 835,//initial position
    y : 175,
    w : 80,// how high?
    h : 80,
    
    move:(function(){ 
      if (level == 5){
         if(character_obj.x > monster.x){monster.x += 3} 
         if(character_obj.x < monster.x){monster.x -= 3}
         if(character_obj.y > monster.y){monster.y += 3} 
         if(character_obj.y < monster.y){monster.y -= 3}  
      }    
      el("monster").style.left = this.x + "px";
      el("monster").style.top = this.y + "px";  
    })
    
}
var key = {
    x : 780,//initial position
    y : 70,
    w : 30,// how high?
    h : 30,
    
    move:(function(){ 
      el("key").style.left = this.x + "px";
      el("key").style.top = this.y + "px";  
    })
    
}

//Functions for levels begin here!
function level_1(){
    
    if(level == 1){
        
        wall.x = 400;
        wall.y = 780;
        
        //dissapear in lvl 1 if already created
        if (create_lvl2 > 1){
        el("smalldoor").style.display = "none";
        el("bigdoor").style.display = "none";
        }
      
   
    }
    
}

function level_2(){
    
    if (create_lvl2 < 1){
//bigdoor creation
    div = document.createElement('div');
    div.id = "bigdoor";
	div.style.width  = 60 + "px";
	div.style.height = 400 + "px";
	div.style.background = "grey"; 
    document.body.appendChild(div);
//smalldoor creation    
    div = document.createElement('div');
    div.id = "smalldoor";
	div.style.width  = 70 + "px";
	div.style.height = 200 + "px";
	div.style.background = "grey"; 
    document.body.appendChild(div);   
        
    create_lvl2 = 2; //creation lvl 2 done
        
    }
    
    if(level == 2){
       
        bigdoor.x = 998;
        bigdoor.y = 250;

        smalldoor.x = 0;
        smalldoor.y = 400;
            
        wall.x = 410;
        wall.y = 0;
        
        //reapear
        if (create_lvl2 > 1){
        el("smalldoor").style.display = "block";
        el("bigdoor").style.display = "block";
        el("parede").style.display = "block";
        
        }
        //if lvl3 is created, dissapear!
        if(create_lvl3 > 1){
        
        castledoor.x = -500;
        castledoor.y = -500;
       
        
        el("castle").style.display = "none";
        el("castledoor").style.display = "none";
           
        
        } 
        //if lvl4 is created, dissapear!
        if(create_lvl4 == 2){  
        
        maze.y = -1000;
        maze1.y = -1000;
        maze2.y = -1000;
       
        
        el("bigdoor").style.display = "block";
        el("overflow").style.display = "none";
        
        //change colors for lvl 4
        el("background_basic").style.backgroundColor = "grey";
        el("background_basic").style.borderColor = "navy";
        el("character").style.backgroundColor = "blue";
        el("parede").style.backgroundColor = "grey";
        el("smalldoor").style.backgroundColor = "grey";
        }
        
    }   
}

function level_3(){
    //create lvl 3
    if (create_lvl3 == 0){
//castle creation
    div = document.createElement('div');
    div.id = "castle";
	div.style.width  = 400 + "px";
	div.style.height = 400 + "px";
	div.style.background = "FireBrick"; 
    div.style.top = 220 + "px";
    div.style.left = 500 + "px";
    document.body.appendChild(div);
  //castle creation - second part     
    var div1;
	div1 = document.createElement('div');
	div1.style.width  = 200 + "px";
	div1.style.height = 200 + "px";
    div1.style.margin = 100 + "px";     
	div1.style.background = "red";
	div.appendChild(div1);
//castle door creation    
    div2 = document.createElement('div');
    div2.id = "castledoor";
	div2.style.width  = 70 + "px";
	div2.style.height = 70 + "px";
	div2.style.background = "black"; 
    div2.style.zIndex = 2;    
    document.body.appendChild(div2);   
        
    create_lvl3 = 2; //creation lvl 3 done
        
    }
    
    if(level == 3){
        
        bigdoor.x = 0;
        bigdoor.y = 250;
               
        castledoor.x = 495;
        castledoor.y = 385;
        
        el("smalldoor").style.display = "none";
        el("parede").style.display = "none";
        
        //reapear if alredy created
        if(create_lvl3 == 2){
        el("castle").style.display = "block";
        el("castledoor").style.display = "block";
        } 
    } 
    
}

function level_4(){
    //create lvl 4 if not created
    if (create_lvl4 == 0){
//maze 1
    div = document.createElement('div');
    div.id = "maze";
	div.style.width  = 400 + "px";
	div.style.height = 70 + "px";
	div.style.background = "black"; 
    div.style.top = 300 + "px";
    div.style.left = 600 + "px";
    document.body.appendChild(div);
//maze 2  
    var div1;
	div1 = document.createElement('div');
    div1.id = "maze1";
	div1.style.width  = 70 + "px";
	div1.style.height = 300 + "px";
	div1.style.background = "black"; 
    div1.style.top = 300 + "px";
    div1.style.left = 550 + "px";
    document.body.appendChild(div1);
//maze 3  
    var div2;    
    div2 = document.createElement('div');
    div2.id = "maze2";
	div2.style.width  = 70 + "px";
	div2.style.height = 600 + "px";
	div2.style.background = "black"; 
    div2.style.top = 0 + "px";
    div2.style.left = 300 + "px";    
    document.body.appendChild(div2);   
        
    create_lvl4 = 2; //creation lvl 4 done
        
    }
    
    if(level == 4){
        //set lvl 4
        smalldoor.x = 985;
        smalldoor.y = 400;
        maze.x = 600;
        maze.y = 300;
        maze1.x = 550;
        maze1.y = 300;
        maze2.x = 300;
        maze2.y = 0;
        
        wall.y = 0;
        wall.x = 70;
        
        el("bigdoor").style.display = "none";
        el("overflow").style.display = "block";
        el("smalldoor").style.display = "block";
        
        //change colors for lvl 4
        el("background_basic").style.backgroundColor = "FireBrick";
        el("background_basic").style.borderColor = "black";
        el("character").style.backgroundColor = "LightSlateGrey";
        el("parede").style.backgroundColor = "black";
        el("smalldoor").style.backgroundColor = "black";
     
    }
    //if lvl5 is created, dissapear!
    if(create_lvl5 == 2){  
        
        key.y = -500;
        monster.y = -500;
        monster.x = -500;
        
    }
    
}

function level_5(){
    
//Create level 5!
    if (create_lvl5 == 0){
    //Monster 
    div = document.createElement('div');
    div.id = "monster";
	div.style.width  = 80 + "px";
	div.style.height = 80 + "px";
	div.style.background = "OliveDrab"; 
    div.style.top = 300 + "px";
    div.style.left = 600 + "px";
    div.innerHTML = "Monster" 
    div.style.textAlign = "center";    
    div.style.lineHeight = 75 + "px";   
    document.body.appendChild(div);
    //Key  
    var div1;
	div1 = document.createElement('div');
    div1.id = "key";
	div1.style.width  = 30 + "px";
	div1.style.height = 30 + "px";
	div1.style.background = "Yellow"; 
    div1.style.top = 300 + "px";
    div1.style.left = 550 + "px"; 
    div1.innerHTML = "Key";
    div1.style.lineHeight = 25 + "px";
    document.body.appendChild(div1);
    
    create_lvl5 = 2; //creation lvl 5 done
        
    }
//make things happen in level 5
    if(level == 5){  
        //level 4 go away!
        maze.y = -1000;
        maze1.y = -1000;
        maze2.y = -1000;
        
        //build level 5
        wall.y = 780;
        key.y = 70;
        
        el("overflow").style.display = "none";
        el("smalldoor").style.display = "none";
    } 
}

function game_over(){
    el("background_basic").style.zIndex = 98;
    el("background_basic").innerHTML = "Game Over";
    
    gameover_if = 1;
    console.log("Gameover =" + gameover_if);
    
    //Embed video creation
    iframe = document.createElement('iframe');
	iframe.style.width  = 600 + "px";
	iframe.style.height = 500 + "px";
    iframe.style.position = "absolute";
    iframe.style.top = 250 + "px";
    iframe.style.left = 250 + "px";
    iframe.style.zIndex = 99;
    iframe.src = "https://www.youtube.com/embed/NZQ88n5iP_0?autoplay=1";
    iframe.auto
    document.body.appendChild(iframe);
}

//Audio obj
var soundfx = {
       
    openfx:(function(){ 
        var sound = new Audio();
        sound.src = "mp3/break.mp3";
        sound.play();
    }),
    deathfx:(function(){ 
        var sound = new Audio();
        sound.src = "mp3/death.mp3";
        sound.play();
    }),
    keyfx:(function(){ 
        var sound = new Audio();
        sound.src = "mp3/spawn.mp3";
        sound.play();
    })    
}

//Timer functions
function starttimer (){
    
    starttime = new Date(); 
    
}
function stoptimer(){
    
    var stoptime = new Date();
    var diff = stoptime - starttime;
    el("info").innerHTML = "Game completion time = " + Math.floor(diff /1000) + " Seconds";
    el("info").style.color = "white";
    el("info").style.position = "absolute";
    el("info").style.top = 850 + "px";
}


function render (){
    
    //levelsssss
    if(level == 1){ level_1(); }
    if(level == 2){ level_2(); }
    if(level == 3){ level_3(); }
    if(level == 4){ level_4(); }
    if(level == 5){ level_5(); }
    
    //if level created, make things move!
    if (create_lvl2 == 2){
        bigdoor.move();
        smalldoor.move(); 
    }
    if (create_lvl3 == 2){
        castledoor.move();    
    }
    if (create_lvl4 == 2){
        character_over.move();
        maze.move();
        maze1.move();
        maze2.move();
    }
    if (create_lvl5 == 2){
        monster.move(); 
        key.move();
    }
    
    wall.move();
    character_obj.move();
    
//Collisions begin, take care!
    if(kollision(character_obj, wall) && level == 1){
        //alert("alles gut");
        character_obj.y = 65;
        level = 2;
        console.log("level =" + level);
        soundfx.openfx();
    
    }   
    //Collision if returns to lvl 1
    if(kollision(character_obj, wall) && level == 2){
        character_obj.y = 700;
        level = 1;
        console.log("level =" + level);
        soundfx.openfx();
    }
    //Collision to lvl3
    if(kollision(character_obj, bigdoor) && level == 2){
        character_obj.x = 70;
        level = 3;
        console.log("level =" + level);
        soundfx.openfx();
    }
    if(kollision(character_obj, bigdoor) && level == 3){
        character_obj.x = 900;
        level = 2;
        console.log("level =" + level);
        soundfx.openfx();
    }
    //collision to win! or not if has_key == 0
    if(kollision(character_obj, castledoor)){
        
       if(has_key == 1){
           alert("You finished the game");
           character_obj.x = 420;
           character_obj.y = 400;
           pressed_keys[0] = -1;
           pressed_keys[1] = -1;
           //set gameover animation
           game_over();
           stoptimer();
           
       }else{
          alert("You need the key!"+"\nThe key is somewhere in other map!"+"\nBEWARE MONSTERS") 
           character_obj.x = 420;
           character_obj.y = 400;
           pressed_keys[0] = -1;
           pressed_keys[1] = -1;
       }  
    }
    //if gameover = freeze character moviment
    if (gameover_if == 1){
        character_obj.x = 420;
        character_obj.y = 400;
    }
    
    //collision to lvl 4
    if(kollision(character_obj, smalldoor) && level == 2){
        character_obj.x = 900;
        level = 4;
        console.log("level =" + level);
        soundfx.openfx();
    }
    //collision from lvl 4 to lvl 2
	if(kollision(character_obj, smalldoor) && level == 4){
        character_obj.x = 85;
        level = 2;
        console.log("level =" + level);
        soundfx.openfx();
    }
    
    //collisions in lvl 4 -- Maze collisions
    if (create_lvl4 == 2){
        
      //Collision from down 
        if(kollision(character_obj, maze)  && character_obj.y > 350){
            character_obj.y += 5;
            character_over.y += 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
            
        }
        if(kollision(character_obj, maze1) && character_obj.x > 600){
            character_obj.x += 5;
            character_over.x += 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
        }
        if(kollision(character_obj, maze2) && character_obj.x > 350){
            character_obj.x += 5;
            character_over.x += 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
        }
        
        //Collision from top 
        if(kollision(character_obj, maze)  && character_obj.y < 350){
            character_obj.y -= 5;
            character_over.y -= 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
        }
        if(kollision(character_obj, maze1) && character_obj.x < 600){
            character_obj.x -= 5;
            character_over.x -= 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
        }
        if(kollision(character_obj, maze2) && character_obj.x < 350){
            character_obj.x -= 5;
            character_over.x -= 5;
            pressed_keys[0] = -1;
            pressed_keys[1] = -1;
        }
    }
    //Collision to level 5!
    if(kollision(character_obj, wall) && level == 4){
        character_obj.y = 735; 
        monster.y = 175;
        monster.x = 800;
        level = 5;
        console.log("level =" + level);
        soundfx.openfx();
    }
    //Collision to level 4 from level 5
    if(kollision(character_obj, wall) && level == 5){
        character_obj.y = 100; 
        level = 4;
        console.log("level =" + level); 
        soundfx.openfx();
    } 
//Monster collision!!!!!    
    if(kollision(character_obj, monster) && level == 5){
        soundfx.deathfx();
        alert("You have been eaten alive! \n Try again or Press F5 to restart") 
        character_obj.y = 720;
        character_obj.x = 100;
        monster.y = 175;
        monster.x = 800;
        pressed_keys[0] = -1;
        pressed_keys[1] = -1;  
    } 
//Key collision!!!!!    
    if(kollision(character_obj, key) && level == 5){
        soundfx.keyfx();
        alert("You have the key!") 
        pressed_keys[0] = -1;
        pressed_keys[1] = -1;
        has_key = 1;
        key.x = -500;      
    } 
    
    requestAnimationFrame(render);
}//Ende render

function kollision(a,b){
    if( a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.h + a.y > b.y
      ){
        return true;
    }else{
        return false;
    }    
} // ENDE kollision

document.onkeydown = keyboard;
document.onkeyup = up;
starttimer();
render();
