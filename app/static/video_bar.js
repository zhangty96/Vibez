$(function() {
	var c = document.getElementById("myCanvas");
	var bar = c.getContext("2d");
	    bar.rect(0, 0, 600, 20);
	    bar.stroke();
	var myarray = [1,2,3,4,5,8,11,20,34,50];
	for (i = 0; i < myarray.length; i++) {
	    var ctx = c.getContext("2d");
	    ctx.rect(myarray[i]*10, 0, 2, 20);
	    ctx.stroke();
	}
	$("#myCanvas").click(function(e){
   		var parentOffset = $(this).offset(); 
   		var relX = e.pageX - parentOffset.left;
 		console.log(parseInt(relX/600*player.getDuration()));
 		seekTo(parseInt(relX/600*player.getDuration()));
	});
});