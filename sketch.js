function setup() {
  createCanvas( windowWidth , windowHeight );
  
  noStroke();
  
  background( 0 , 0 , 0 )
}
function draw() {
  var x = random( 0 , windowWidth );
  var y = random( 0 , windowHeight);
  var d = random( 0 , 125);
  var f = random( 0 , 125);
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);
  var a = random( 0 , 200);
    ellipse( x , y , d , f);
     fill( r , g , b , 100 );
}
