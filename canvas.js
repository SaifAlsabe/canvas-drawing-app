window.addEventListener('load', () => {
    //setting up canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //matching resolution to size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    //start with mouse unclicked 
    var paint = false;

    //mouse is clicked
    startPosition = (e) => {
        paint = true;
        draw(e)
    }

    //mouse is not clicked
    endPosition = () => {
        paint = false;
        ctx.beginPath();
    }

    //mouse is moving
    draw = (e) => {

        //if mouse is not clicked return
        if (!paint) return

        //getting position relative to canvas
        let canvasPosition = canvas.getBoundingClientRect();
        relativePositionX = e.clientX - canvasPosition.left;
        relativePositionY = e.clientY - canvasPosition.top;

        //line style
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        //drawing instructions
        ctx.lineTo(relativePositionX, relativePositionY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(relativePositionX, relativePositionY);
    }

    //controllers
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

});