var VIDWIDTH = 600;

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
	var bar = c.getContext("2d");
	    bar.fillStyle = "black";
	    bar.rect(0, 0, VIDWIDTH, 20);
	    bar.fill();
	var myarray = inputarray;
	for (i = 0; i < myarray.length; i++) {
	    var ctx = c.getContext("2d");
	    ctx.fillStyle = "white";
	    ctx.rect(myarray[i]/player.getDuration()*VIDWIDTH, 0, 2, 20);
	    ctx.fill();
	}};
})( jQuery );
