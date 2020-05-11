var bullet,speed,weight;
var wall,thickness;




function setup(){
    bullet = createSprite(50,200,50,20);
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);
    wall = createSprite(50,1200,thickness,canvas.height/2);
    wall.shapeColor = color(80,80,80);
    
}

function draw(){
    bullet.velocityX = speed;

    if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
        
        if(damage >= 10){
            wall.shapeColor = color(255,0,0);
        }
        if(damage < 10){
            wall.shapeColor = color(0,255,0);
        }
    }

    



}
function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }
    return false;
}
