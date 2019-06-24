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
            ctx.fillRect(x, -(y), 5, 5); 
        }
        
        
        function drawCartesianText(ctx, x, y, text) 
        {
            ctx.fillText(text, x, -(y));  
        }

        width  = Number(document.getElementById('width').value);
        height = Number(document.getElementById('height').value);
        diagonal = Number(document.getElementById('diagonal').value);
        var a=width.toString();
        var b=height.toString();
        var d=",";
        var e=")";
        var str="(";
        var txt=str.concat(a,d,b,e); 
        drawCartesianPoint(ctx, height*10/diagonal, width*10/diagonal);
        drawCartesianText(ctx, height*10/diagonal, width*10/diagonal, txt);
        
}