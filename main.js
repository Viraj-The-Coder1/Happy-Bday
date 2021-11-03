Canvas = new fabric.Canvas("bday");
function newimg(){
    fabric.Image.fromURL('bgimg.png', function(bg){
        bg_img = bg;
        bg_img.scaleToWidth(650);
        bg_img.scaleToHeight(560);
        bg_img.set({
            top:0,
            left:0
        });
        Canvas.add(bg_img);
    })
}
function audioplay(){
    document.getElementById("song").play();
}