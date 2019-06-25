var c,ctx,width,height;
var initialize  = function () {
        console.log('loaded');
        
        c = document.getElementById('canvas');
        ctx = c.getContext('2d');
        
        ctx.translate(200, 200);
        
        ctx.beginPath();
        ctx.moveTo(-200,0);
        ctx.lineTo(200,0);
        ctx.stroke();
        ctx.moveTo(0,-200);
        ctx.lineTo(0, 200);
        ctx.stroke();     
        
        ctx.font = "12px Arial";
        ctx.fillText("+ x",180, -10);
        ctx.fillText("- y",10, 180);
        
        ctx.fillText("- x",-200, -10);
        ctx.fillText("+ y",10, -180);  
        
    };


function draw() 
{

        function drawCartesianPoint(ctx, x, y) 
        {
        	ctx.fillStyle = "#D3D3D3";
            ctx.fillRect(x, -(y), -x, y); 
            ctx.lineTo(x,0);
        } 
        function drawCartesianText(ctx, x, y, text) 
        {
            ctx.fillStyle = "#000000";
            ctx.fillText(text, x, -(y));

        }
        function clear(ctx) 
        {
			ctx.clearRect(-200, -200, c.width, c.height);
		}
		function initialize()
		{
		    
		    ctx.beginPath();
		    ctx.moveTo(-200,0);
		    ctx.lineTo(200,0);
		    ctx.stroke();
		    ctx.moveTo(0,-200);
		    ctx.lineTo(0, 200);
		    ctx.stroke();     
		    
		    ctx.font = "12px Arial";
		    ctx.fillText("+ x",180, -10);
		    ctx.fillText("- y",10, 180);
		    
		    ctx.fillText("- x",-200, -10);
		    ctx.fillText("+ y",10, -180);  
        
    	};
		function drawBoard(){
			var bw = 200;
			var bh = 200;
			var p = -200;
			var cw = bw + (p*2) + 1;
			var ch = bh + (p*2) + 1;
		    for (var x = -400; x <= bw; x += 40) {
		        ctx.moveTo(0.5 + x + p, p);
		        ctx.lineTo(0.5 + x + p, bh + p);
		    }

		    for (var x = -400; x <= bh; x += 40) {
		        ctx.moveTo(p, 0.5 + x + p);
		        ctx.lineTo(bw + p, 0.5 + x + p);
		    }
		    for (var x = -400; x <= bw; x += 40) {
		        ctx.moveTo(0.5 + x + p, -p);
		        ctx.lineTo(0.5 + x + p, bh + p);
		    }

		    for (var x = -400; x <= bh; x += 40) {
		        ctx.moveTo(-p, 0.5 + x + p);
		        ctx.lineTo(bw +p, 0.5 + x + p);
		    }
		    for (var x = -200; x <= bw; x += 40) {
		        ctx.moveTo(0.5 + x - p, p);
		        ctx.lineTo(0.5 + x - p, bh - p);
		    }

		    for (var x = -200; x <= bh; x += 40) {
		        ctx.moveTo(p, 0.5 + x - p);
		        ctx.lineTo(bw -p, 0.5 + x - p);
		    }

		    ctx.strokeStyle = "black";
		    ctx.stroke();
		}

		
    	clear(ctx);
    	initialize();
    	drawBoard();       
        width  = Number(document.getElementById('width').value);
        height = Number(document.getElementById('height').value);
        diagonal = Number(document.getElementById('diagonal').value);
        var a=width.toString();
        var b=height.toString();
        var d=",";
        var e=")";
        var str="(";
        var txt=str.concat(a,d,b,e); 
        drawCartesianPoint(ctx, width*10/diagonal, height*10/diagonal);
        drawCartesianText(ctx, width*10/diagonal, height*10/diagonal, txt);
}

