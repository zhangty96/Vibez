var VIDWIDTH = 800;

$(function() {
	$("#myCanvas").click(function(e){
   		var parentOffset = $(this).offset(); 
   		var relX = e.pageX - parentOffset.left;
 		console.log(relX/VIDWIDTH*player.getDuration());
 		seekTo(relX/VIDWIDTH*player.getDuration());
	});
});

(function( $ ) {
	$.draw_bar = $.fn.draw_bar = function(inputarray) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(0, 0, VIDWIDTH, 20);
  ctx.fillStyle="#cc1b20";
  ctx.fill();
	var myarray = inputarray;
	for (i = 0; i < myarray.length; i++) {
    ctx.beginPath();
    ctx.rect(myarray[i]/player.getDuration()*VIDWIDTH, 0, 3, 20);
    ctx.fillStyle = "#f0cc00";
    ctx.fill();
	}};
})( jQuery );
