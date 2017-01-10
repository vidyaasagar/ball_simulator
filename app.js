balls_count=0;
balls_list ={};
speed = 10;
function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}

function Ball(x,y,direction)
    {
        this.x = x;
        this.y = y;

        //direction
        delta = 5; // range (from 0) of possible dx or dy change
        max = 15; //  maximum dx or dy values

        this.dx = 1;
        this.dy = -1;
    }
var canvas  = document.getElementById("ball_simulator");

canvasLeft = canvas.offsetLeft;
canvasTop = canvas.offsetTop;
canvasRight = canvas.offsetRight;
canvasBottom = canvas.offsetBottom;
canvasContext = canvas.getContext('2d');

canvas.addEventListener('click', function(event) { 
    x = event.pageX - canvasLeft;
    y = event.pageY - canvasTop;
    //angle = Math.random(0, Math.PI*2);
   angle = 1;
   
    var ball = new Ball(x,y,angle);
    balls_list[balls_count]=ball;
    balls_count++;
    //draw a circle
        canvasContext.beginPath();
        canvasContext.arc(x, y, 10, 0, Math.PI*2); 
        canvasContext.fillStyle = "#0095DD";
        canvasContext.fill();
        canvasContext.closePath();
}, false);
//draw balls function
function draw() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    for(i=0;i<balls_count;i++)
    {
        //console.log(balls_list[i]);
        x=balls_list[i].x+balls_list[i].dx;
        balls_list[i].x=x;
        y=balls_list[i].y+balls_list[i].dy;
        balls_list[i].y=y;
        //bouncing back 
        if(x  > canvas.width || x < 0) {
            balls_list[i].dx = -balls_list[i].dx;
            x=balls_list[i].x+balls_list[i].dx;
        balls_list[i].x=x;
        }

        if(y > canvas.height || y < 0) {
            balls_list[i].dy = -balls_list[i].dy;
            y=balls_list[i].y+balls_list[i].dy;
            balls_list[i].y=y;
        }
        //end
        console.log("x="+x+"y"+y+"ball"+i);
        //draw a circle
        canvasContext.beginPath();
        canvasContext.arc(x, y, 10, 0, Math.PI*2); 
        canvasContext.fillStyle = "#0095DD";
        canvasContext.fill();
        canvasContext.closePath();

    }
    
}
setInterval(draw,10);
