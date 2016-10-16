$(function() {
	$("#myCanvas").click(function(e){
   		var parentOffset = $(this).offset(); 
   		var relX = e.pageX - parentOffset.left;
 		console.log(parseInt(relX/600*player.getDuration()));
 		seekTo(parseInt(relX/600*player.getDuration()));
	});
});

(function( $ ) {
	$.draw_bar = $.fn.draw_bar = function(inputarray) {
	var c = document.getElementById("myCanvas");
	var bar = c.getContext("2d");
	    bar.fillStyle = "#white";
	    bar.rect(0, 0, 600, 20);
	    bar.stroke();
	var myarray = inputarray;
	for (i = 0; i < myarray.length; i++) {
	    var ctx = c.getContext("2d");
	    ctx.fillStyle = "white";
	    ctx.rect(myarray[i], 0, 2, 20);
	    ctx.stroke();
	}};
})( jQuery );
