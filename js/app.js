var balls_count=0;
var bounce_count=0;
var balls_list ={};

var speed = 10;
function Ball(x,y,angle)
    {
        this.x = x;
        this.y = y;
        this.angle= angle;

        //direction
        delta = 5; // range (from 0) of possible dx or dy change
        max = 15; //  maximum dx or dy values

        this.dx = 0.5;//(0,1) to move bottom ,(0,-1) to move up (1,0) to move straight line
		//returns 1 or 2
		flag= Math.floor((Math.random() * 2) + 1);
		if(flag == 1 )
		{
			this.dy = Math.random();
		}
		else
		{
			this.dy = -Math.random();
		}
		flag= Math.floor((Math.random() * 2) + 1);
		if(flag == 1 )
		{
			this.dx = 0.5;
		}
		else
		{
			this.dx = -0.5;
		}
    }
 function randomAngle(min,max){
    return (Math.random() * (max - min + 10) + min );
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
   var angle = randomAngle(0,360);
   console.log(angle);
    //angle = 0;
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
			speed = document.getElementById('speed').value;
        //console.log(balls_list[i]);
        x=balls_list[i].x+(balls_list[i].dx * parseInt(speed));
        balls_list[i].x=x;
        y=balls_list[i].y+balls_list[i].dy;
        balls_list[i].y=y;
        //bouncing back
        if(x  > canvas.width || x < 0) {
			bounce_count++;
			document.getElementById('count').innerHTML=bounce_count;
            balls_list[i].dx = -balls_list[i].dx;
            x=balls_list[i].x+balls_list[i].dx;
			balls_list[i].x=x;
        }

        if(y > canvas.height || y < 0) {
			bounce_count++;
			document.getElementById('count').innerHTML=bounce_count;
            balls_list[i].dy = -balls_list[i].dy;
            y=balls_list[i].y+balls_list[i].dy;
            balls_list[i].y=y;

        }

        //end
       // console.log("x="+x+"y"+y+"ball"+i);
        //draw a circle
        canvasContext.beginPath();
        canvasContext.arc(x, y, 10, 0, Math.PI*2);
        canvasContext.fillStyle = "#0095DD";
        canvasContext.fill();
        canvasContext.closePath();

    }

}
setInterval(draw,10);
