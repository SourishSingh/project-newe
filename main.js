
canvas=new fabric.canvas('myCanvas');
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png",function(Img){
		hole_obj = Img;
		hole_obj = scaleToWidth(50);
		hole_obj = scaleToHeight(50);
		hole_obj.set({
			top=hole_y,
			left=hole_x
		});
	});
	new_image();
}
function new_image()
{
	fabric.image.fromURL("golf-h.png",function(Img){
		hole_obj = Img;
		hole_obj = scaleToWidth(50);
		hole_obj = scaleToHeight(50);
		hole_obj.set({
			top=hole_y;
			left=hole_x;
		});
		canvas.add(ball_obj)
	});
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
	document.getElementById("hd3").innerHTML="won";
	canvas.remove(ball_obj);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(keyCode==38){
			ball_y=ball_y-10;
		   }
	}

	function down()
	{
		if(keyCode==40){
		 ball_y=ball_y+10;
		}
	}

	function left()
	{
		if(keyCode==38){
			ball_x=ball_x+10;
		   }
		if(ball_x >5)
		{
			ball_x=0;
		}
	}

	function right()
	{if(keyCode==38){
		ball_x=ball_x-10;
	   }
		if(ball_x <=1050)
		{
			ball_x=0;
		}
	}
	
}

